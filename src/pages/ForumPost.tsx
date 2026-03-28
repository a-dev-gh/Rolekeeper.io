import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function ForumPost() {
  return (
    <>
      <Helmet><title>Post — RoleKeeper</title></Helmet>
      <div className="forum-detail">
        <Link to="/community" style={{ fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--t3)', letterSpacing: 1, marginBottom: 24, display: 'block' }}>← BACK TO COMMUNITY</Link>
        <div className="glass" style={{ padding: 40, textAlign: 'center' }}>
          <h2 className="forum-detail-title">Forums Coming Soon</h2>
          <p style={{ color: 'var(--t2)', marginTop: 12 }}>The community forums are being built. Check back soon!</p>
        </div>
      </div>
    </>
  )
}
