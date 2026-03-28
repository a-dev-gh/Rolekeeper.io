import { APP_URL } from '../../lib/constants'

export function AboutSection() {
  return (
    <section id="about">
      <div className="section-inner">
        <div className="about-grid">
          <div>
            <span className="tag">THE BUILDER</span>
            <h2 className="section-heading">
              Built by a developer<br />
              <span className="mg">who needed it first.</span>
            </h2>
            <p style={{ fontFamily: 'var(--fs)', fontStyle: 'italic', fontSize: 17, color: 'var(--t2)', lineHeight: 1.85, marginBottom: 18 }}>
              RoleKeeper started because I kept losing my best prompts. Every session started from zero. No record of what worked, no way to get better.
            </p>
            <p style={{ fontSize: 15, color: 'var(--t2)', lineHeight: 1.8, marginBottom: 16 }}>
              Every tool I tried was either built for developers or too simple to stick with. So I built what I needed — a system that gives every AI session structure, tracking, and real progress.
            </p>
            <p style={{ fontSize: 15, color: 'var(--t2)', lineHeight: 1.8, marginBottom: 32 }}>
              This is version one. There's a lot more coming — and if it helps you too, that means everything.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={APP_URL} className="btn-primary" target="_blank" rel="noopener noreferrer">TRY IT →</a>
              <a href="mailto:support@rolekeeper.io" className="btn-ghost">SAY HELLO</a>
            </div>
          </div>

          <div className="glass av-card reveal" style={{ padding: 30, textAlign: 'center' }}>
            <div className="av" style={{ background: 'none', boxShadow: 'none', padding: 0, overflow: 'hidden' }}>
              <img src="/assets/avatar.webp" alt="Adrian" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </div>
            <div className="av-name">Adrian</div>
            <div className="av-role">WEB DEV & AI BUILDER</div>
            <span className="av-flag">🇩🇴</span>
            <div className="av-stats">
              <div className="av-s"><span className="av-n">Solo</span><span className="av-l">BUILDER</span></div>
              <div className="av-s"><span className="av-n" style={{ color: 'var(--green)', fontSize: 14 }}>LIVE</span><span className="av-l">STATUS</span></div>
              <div className="av-s"><span className="av-n">nightly</span><span className="av-l">SHIPPING</span></div>
              <div className="av-s"><span className="av-n">🇩🇴</span><span className="av-l">SANTO DOMINGO</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
