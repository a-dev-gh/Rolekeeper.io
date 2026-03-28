import { Helmet } from 'react-helmet-async'

export default function Changelog() {
  return (
    <>
      <Helmet>
        <title>Changelog — RoleKeeper</title>
      </Helmet>
      <div className="changelog-page">
        <span className="legal-tag">UPDATES</span>
        <h1 className="legal-title">Changelog</h1>
        <p className="legal-updated">What's new in RoleKeeper</p>

        <div className="changelog-entry">
          <div className="changelog-date">MARCH 28, 2026</div>
          <h3>Security & Performance Audit</h3>
          <ul>
            <li><span className="changelog-badge fix">FIX</span> Fixed auth listener memory leak on hot reload</li>
            <li><span className="changelog-badge fix">FIX</span> Added error handling to all Supabase RPC calls</li>
            <li><span className="changelog-badge improve">IMPROVE</span> Added Content-Security-Policy headers</li>
            <li><span className="changelog-badge improve">IMPROVE</span> Removed unnecessary whole-store subscriptions</li>
          </ul>
        </div>

        <div className="changelog-entry">
          <div className="changelog-date">MARCH 28, 2026</div>
          <h3>Session Mode & Welcome Screen</h3>
          <ul>
            <li><span className="changelog-badge new">NEW</span> Session mode — chain multiple prompts without resetting</li>
            <li><span className="changelog-badge new">NEW</span> Welcome screen with Continue / New / Offline options</li>
            <li><span className="changelog-badge new">NEW</span> Confirm password + password requirements on signup</li>
            <li><span className="changelog-badge improve">IMPROVE</span> EN/ES language toggle on welcome screen</li>
          </ul>
        </div>

        <div className="changelog-entry">
          <div className="changelog-date">MARCH 2026</div>
          <h3>Accounts & Cloud Sync</h3>
          <ul>
            <li><span className="changelog-badge new">NEW</span> Supabase authentication (email + password)</li>
            <li><span className="changelog-badge new">NEW</span> Cloud sync — data follows you across devices</li>
            <li><span className="changelog-badge new">NEW</span> Guild system with leaderboards</li>
            <li><span className="changelog-badge new">NEW</span> Pack library for sharing role collections</li>
          </ul>
        </div>

        <div className="changelog-entry">
          <div className="changelog-date">MARCH 2026</div>
          <h3>Initial Launch</h3>
          <ul>
            <li><span className="changelog-badge new">NEW</span> Core quest flow: Mission → Role → Quest → Log</li>
            <li><span className="changelog-badge new">NEW</span> 70+ starter roles across multiple categories</li>
            <li><span className="changelog-badge new">NEW</span> XP & level progression system</li>
            <li><span className="changelog-badge new">NEW</span> 3 themes: Light, Dark, Arcade</li>
            <li><span className="changelog-badge new">NEW</span> Bilingual support (English + Spanish)</li>
          </ul>
        </div>
      </div>
    </>
  )
}
