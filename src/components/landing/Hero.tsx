import { Link } from 'react-router-dom'
import { APP_URL } from '../../lib/constants'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-logo-wrap" style={{ marginBottom: 28, animation: 'fadeUp .4s ease forwards', opacity: 0 }}>
        <img src="/assets/logo-default.png" className="logo-img-default" style={{ height: 72, width: 'auto' }} alt="RoleKeeper" />
      </div>

      <div className="h-badge">
        <div className="h-dot" />
        FREE TO START · PRO FOR POWER USERS
      </div>

      <h1 className="h-title">
        Stop losing your<br />
        <span className="soft">best AI work.</span>
      </h1>

      <p className="h-sub">
        RoleKeeper gives every AI session a <strong>role, a prompt, and a log.</strong>{' '}
        Your work stays. Your progress shows. You actually get better.
      </p>

      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--mb)',
        background: 'var(--gc)', backdropFilter: 'blur(12px)',
        border: '1px solid rgba(14,165,233,.3)',
        padding: '5px 16px', marginBottom: 24, letterSpacing: 1
      }}>
        ⚡ NEW: SESSION MODE — Chain multiple prompts, earn 3-5 XP each
      </div>

      <div className="h-acts">
        <a href={APP_URL} className="btn-primary" target="_blank" rel="noopener noreferrer">
          Try It Free
        </a>
        <Link to="/guide" className="btn-ghost">See how it works →</Link>
      </div>
    </section>
  )
}
