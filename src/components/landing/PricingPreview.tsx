import { APP_URL } from '../../lib/constants'
import { Link } from 'react-router-dom'

export function PricingPreview() {
  return (
    <section id="pricing">
      <div className="section-inner" style={{ textAlign: 'center' }}>
        <span className="tag">SUPPORT</span>
        <h2 className="section-heading">
          Free to use.<br />
          <span className="mg">Support when you can.</span>
        </h2>
        <p className="section-sub" style={{ margin: '0 auto 56px' }}>
          RoleKeeper is free. Donations help cover hosting and development. Supporters get extra features as a thank you.
        </p>

        <div className="price-grid">
          <div className="glass pc reveal" style={{ padding: 34 }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>⚔</div>
            <div className="pt">FREE</div>
            <div className="pp">$0</div>
            <div className="pper">forever</div>
            <ul className="plist">
              <li>Unlimited roles & quests</li>
              <li>Session logging with ratings</li>
              <li>Session analytics & history</li>
              <li>Cloud sync across devices</li>
              <li>XP & level progression</li>
              <li>3 themes (Light, Dark, Arcade)</li>
              <li>Export your data anytime</li>
            </ul>
            <a href={APP_URL} className="btn-ghost" style={{ width: '100%', justifyContent: 'center', display: 'flex' }} target="_blank" rel="noopener noreferrer">
              START FREE →
            </a>
          </div>

          <div className="glass pc founder reveal" style={{ padding: 34 }}>
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
            <Link to="/donate" className="btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
              DONATE →
            </Link>
          </div>
        </div>

        <p style={{ fontFamily: 'var(--fm)', fontSize: 9, color: 'var(--t3)', letterSpacing: 1, marginTop: 24 }}>
          CANCEL ANYTIME · NO LONG-TERM CONTRACTS · 100% OF REVENUE GOES TO BUILDING THE PRODUCT
        </p>
      </div>
    </section>
  )
}
