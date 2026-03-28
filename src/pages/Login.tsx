import { useState, useCallback, useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { APP_URL } from '../lib/constants'

const LOCKOUT_TIERS = [30, 60, 120]

function validatePassword(password: string): string | null {
  if (password.length < 12) return 'Password must be at least 12 characters long.'
  if (!/[A-Z]/.test(password)) return 'Must contain at least one uppercase letter.'
  if (!/[0-9]/.test(password)) return 'Must contain at least one number.'
  if (!/[^a-zA-Z0-9]/.test(password)) return 'Must contain at least one special character.'
  return null
}

export default function Login() {
  const [view, setView] = useState<'login' | 'signup'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [lockoutRemaining, setLockoutRemaining] = useState(0)

  const failedAttempts = useRef(0)
  const lockoutTier = useRef(0)
  const lockoutTimer = useRef<ReturnType<typeof setInterval> | null>(null)

  const { signIn, signUp, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/dashboard')
    return () => { if (lockoutTimer.current) clearInterval(lockoutTimer.current) }
  }, [isAuthenticated, navigate])

  const startLockout = useCallback(() => {
    const tier = Math.min(lockoutTier.current, LOCKOUT_TIERS.length - 1)
    const duration = LOCKOUT_TIERS[tier]
    lockoutTier.current = tier + 1
    setLockoutRemaining(duration)
    if (lockoutTimer.current) clearInterval(lockoutTimer.current)
    lockoutTimer.current = setInterval(() => {
      setLockoutRemaining(prev => {
        if (prev <= 1) { clearInterval(lockoutTimer.current!); lockoutTimer.current = null; return 0 }
        return prev - 1
      })
    }, 1000)
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (lockoutRemaining > 0) return
    setError(''); setLoading(true)

    const { error: err } = await signIn(email, password)
    setLoading(false)

    if (err) {
      failedAttempts.current += 1
      if (failedAttempts.current >= 5) { startLockout(); failedAttempts.current = 0 }
      setError(err.message || 'Login failed. Check your credentials.')
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(''); setSuccess('')

    const pwError = validatePassword(password)
    if (pwError) { setError(pwError); return }
    if (password !== confirmPassword) { setError('Passwords do not match.'); return }

    setLoading(true)
    const { error: err } = await signUp(email, password)
    setLoading(false)

    if (err) {
      setError(err.message || 'Signup failed. Try again.')
    } else {
      setSuccess('Account created! Check your email to verify, then log in.')
      setView('login')
    }
  }

  return (
    <>
      <Helmet><title>{view === 'login' ? 'Log In' : 'Sign Up'} — RoleKeeper</title></Helmet>

      <div className="login-page">
        <div className="login-card glass">
          <div className="login-logo">
            <div className="nav-mark" style={{ width: 32, height: 32 }} />
            <span className="login-brand">RoleKeeper</span>
          </div>

          <h1 className="login-title">
            {view === 'login' ? 'Welcome back.' : 'Create your account.'}
          </h1>
          <p className="login-sub">
            {view === 'login'
              ? 'Log in to sync your data and access your dashboard.'
              : 'Start free. No credit card required.'}
          </p>

          {error && <div className="login-error">{error}</div>}
          {success && <div className="login-success">{success}</div>}

          <form onSubmit={view === 'login' ? handleLogin : handleSignup}>
            <div className="login-field">
              <label className="login-label">EMAIL</label>
              <input
                type="email"
                className="login-input"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="login-field">
              <label className="login-label">PASSWORD</label>
              <input
                type="password"
                className="login-input"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder={view === 'signup' ? 'Min 12 chars, 1 upper, 1 number, 1 special' : '••••••••••••'}
                required
              />
            </div>

            {view === 'signup' && (
              <div className="login-field">
                <label className="login-label">CONFIRM PASSWORD</label>
                <input
                  type="password"
                  className="login-input"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter your password"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="login-submit"
              disabled={loading || lockoutRemaining > 0}
            >
              {lockoutRemaining > 0
                ? `Too many attempts. Wait ${lockoutRemaining}s`
                : loading
                  ? 'Loading...'
                  : view === 'login' ? 'LOG IN' : 'CREATE ACCOUNT'}
            </button>
          </form>

          <div className="login-switch">
            {view === 'login' ? (
              <p>Don't have an account? <button className="login-link" onClick={() => { setView('signup'); setError(''); setSuccess('') }}>Sign up</button></p>
            ) : (
              <p>Already have an account? <button className="login-link" onClick={() => { setView('login'); setError(''); setSuccess('') }}>Log in</button></p>
            )}
          </div>

          <div className="login-divider" />

          <a href={APP_URL} className="login-app-link" target="_blank" rel="noopener noreferrer">
            Or open the app without an account →
          </a>

          <div className="login-legal">
            By continuing, you agree to our <Link to="/terms">Terms</Link> and <Link to="/privacy">Privacy Policy</Link>.
          </div>
        </div>
      </div>
    </>
  )
}
