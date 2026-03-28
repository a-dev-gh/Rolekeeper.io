import { APP_URL } from '../../lib/constants'

export function CTASection() {
  return (
    <section className="cta-sec">
      <h2 className="cta-h">Your practice starts today.</h2>
      <p className="cta-s">Free to use. No account required. Just open and go.</p>
      <div className="cta-live-wrap">
        <a
          href={APP_URL}
          className="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 14, padding: '16px 40px' }}
        >
          Open RoleKeeper — Free
        </a>
        <p className="cta-note" style={{ marginTop: 16 }}>
          FREE TIER AVAILABLE · NO CREDIT CARD · EXPORT ANYTIME
        </p>
      </div>
    </section>
  )
}
