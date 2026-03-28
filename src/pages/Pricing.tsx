import { Helmet } from 'react-helmet-async'
import { APP_URL } from '../lib/constants'

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Donate — RoleKeeper</title>
      </Helmet>
      <div className="legal-page">
        <span className="legal-tag">SUPPORT THE BUILD</span>
        <h1 className="legal-title">Support the build.</h1>
        <p className="section-sub">
          RoleKeeper is free to use. Donations help cover hosting, database, and development costs. Supporters get Pro features as a thank you.
        </p>

        <div className="price-grid">
          <div className="glass pc" style={{ padding: 34 }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>⚔</div>
            <div className="pt">FREE</div>
            <div className="pp">$0</div>
            <div className="pper">forever</div>
            <ul className="plist">
              <li>Unlimited roles & quests</li>
              <li>Session logging with ratings & notes</li>
              <li>Session analytics & history</li>
              <li>Cloud sync across devices</li>
              <li>XP & level progression</li>
              <li>3 themes (Light, Dark, Arcade)</li>
              <li>Bilingual (English + Spanish)</li>
              <li>Export your data anytime</li>
              <li>Install community packs</li>
            </ul>
            <a
              href={APP_URL}
              className="btn-ghost"
              style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              START FREE →
            </a>
          </div>

          <div className="glass pc founder" style={{ padding: 34 }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>🚀</div>
            <div className="pt">SUPPORTER</div>
            <div className="pp grad">$5</div>
            <div className="pper">per month · donation</div>
            <ul className="plist">
              <li>Everything in Free</li>
              <li>File uploads (images, docs, code)</li>
              <li>Create & publish library packs</li>
              <li>Create & manage guilds</li>
              <li>Priority support</li>
              <li>Early access to new features</li>
              <li>Support an indie builder</li>
            </ul>
            <a
              href={APP_URL}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              DONATE →
            </a>
          </div>
        </div>

        <div className="highlight-box" style={{ marginTop: 48 }}>
          <p>
            Still have questions? Email us at support@rolekeeper.io — we're a one-person team
            and we read every message.
          </p>
        </div>

        <p style={{ fontFamily: 'var(--fm)', fontSize: 9, color: 'var(--t3)', letterSpacing: 1, marginTop: 24, textAlign: 'center' }}>
          CANCEL ANYTIME · NO LONG-TERM CONTRACTS · 100% OF REVENUE GOES TO BUILDING THE PRODUCT
        </p>
      </div>
    </>
  )
}
