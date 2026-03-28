import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="footer-brand">
        <div className="footer-mark" />
        RoleKeeper
      </Link>

      <div className="footer-links">
        <Link to="/donate">DONATE</Link>
        <Link to="/roadmap">ROADMAP</Link>
        <Link to="/guide">GUIDE</Link>
        <Link to="/community">COMMUNITY</Link>
        <Link to="/privacy">PRIVACY</Link>
        <Link to="/terms">TERMS</Link>
        <Link to="/changelog">CHANGELOG</Link>
      </div>

      <div className="footer-copy">
        <span>&copy;</span> {new Date().getFullYear()} RoleKeeper
      </div>
    </footer>
  )
}
