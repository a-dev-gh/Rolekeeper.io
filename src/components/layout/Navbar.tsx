import { useState, useRef, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useThemeContext } from '../../context/ThemeContext'
import { useAuth } from '../../hooks/useAuth'

export function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { theme, setTheme } = useThemeContext()
  const { isAuthenticated, profile, signOut } = useAuth()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => { setDropdownOpen(false) }, [location])

  async function handleSignOut() {
    await signOut()
    navigate('/')
  }

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      {/* ── TOP BAR (minimal: logo + profile) ── */}
      <div className="topbar-minimal">
        <Link to="/" className="topbar-logo-link">
          <img src="/assets/logo-default.png" alt="RoleKeeper" className="topbar-logo-img" />
        </Link>

        <div className="topbar-right">
          {isAuthenticated ? (
            <div className="nav-profile-wrap" ref={dropdownRef}>
              <button
                className="nav-user-btn"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {profile?.avatar_emoji || '⚔'} {profile?.username || 'Account'}
                <span className="nav-chevron">{dropdownOpen ? '▲' : '▼'}</span>
              </button>

              {dropdownOpen && (
                <div className="nav-dropdown">
                  <Link to="/dashboard" className="nav-dropdown-item">📊 Dashboard</Link>
                  <Link to="/dashboard/profile" className="nav-dropdown-item">⚙ Settings</Link>
                  <div className="nav-dropdown-divider" />
                  <button className="nav-dropdown-item nav-dropdown-logout" onClick={handleSignOut}>
                    ↩ Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="topbar-login">LOG IN</Link>
          )}
        </div>
      </div>

      {/* ── BOTTOM DOCK (signature nav) ── */}
      <nav className="dock-outer">
        <div className="dock-lava">
          <div className="lava-blob lb1" />
          <div className="lava-blob lb2" />
          <div className="lava-blob lb3" />
        </div>
        <div className="dock">
          <Link to="/" className="dock-logo">
            <img src="/assets/logo-default.png" className="dock-logo-img" alt="RK" />
          </Link>

          <div className="dock-links">
            <Link to="/guide" className={`dock-link-text${isActive('/guide') ? ' active' : ''}`}>GUIDE</Link>
            <Link to="/guilds" className={`dock-link-text${isActive('/guilds') ? ' active' : ''}`}>GUILDS</Link>
            <Link to="/roadmap" className={`dock-link-text${isActive('/roadmap') ? ' active' : ''}`}>ROADMAP</Link>
            <Link to="/donate" className={`dock-link-text${isActive('/donate') ? ' active' : ''}`}>DONATE</Link>
            <Link to="/leaderboard" className={`dock-link-text${isActive('/leaderboard') ? ' active' : ''}`}>RANKS</Link>
            <Link to="/community" className={`dock-link-text${isActive('/community') ? ' active' : ''}`}>FORUM</Link>
          </div>

          <div className="dock-orbs">
            <button
              className={`d-orb dorb-l${theme === 'light' ? ' on' : ''}`}
              onClick={() => setTheme('light')}
              title="Light"
            />
            <button
              className={`d-orb dorb-d${theme === 'dark' ? ' on' : ''}`}
              onClick={() => setTheme('dark')}
              title="Dark"
            />
            <button
              className={`d-orb dorb-a${theme === 'arcade' ? ' on' : ''}`}
              onClick={() => setTheme('arcade')}
              title="Arcade"
            />
          </div>

          <a href="https://rolekeeper.quest" className="dock-cta" target="_blank" rel="noopener noreferrer">
            OPEN APP →
          </a>
        </div>
      </nav>
    </>
  )
}
