import { Helmet } from 'react-helmet-async'

const categories = [
  { name: 'General', slug: 'general', desc: 'Anything RoleKeeper related' },
  { name: 'Tips & Tricks', slug: 'tips', desc: 'Share your best prompts and workflows' },
  { name: 'Feature Requests', slug: 'features', desc: 'Ideas for new features' },
  { name: 'Bug Reports', slug: 'bugs', desc: 'Found something broken? Report it here' },
  { name: 'Show & Tell', slug: 'showcase', desc: 'Show off your roles, quests, and setups' },
]

export default function Community() {
  return (
    <>
      <Helmet><title>Community — RoleKeeper</title></Helmet>
      <div className="data-page">
        <div className="data-page-header">
          <span className="legal-tag" style={{ display: 'block', marginBottom: 12 }}>FORUMS</span>
          <h1>Community <span className="mg">Forums</span></h1>
          <p>Discuss, share, and learn together.</p>
        </div>

        <div className="forum-categories" style={{ marginBottom: 32 }}>
          {categories.map(c => (
            <button className="forum-cat-btn" key={c.slug}>{c.name}</button>
          ))}
        </div>

        <div className="highlight-box" style={{ marginBottom: 24 }}>
          <p><strong>Forums are launching soon.</strong> We're building a Supabase-powered forum system right here. In the meantime, share feedback at <a href="mailto:support@rolekeeper.io" style={{ color: 'var(--mb)' }}>support@rolekeeper.io</a>.</p>
        </div>

        <div className="data-grid">
          {categories.map(c => (
            <div className="glass data-card" key={c.slug} style={{ cursor: 'default' }}>
              <div className="data-card-name">{c.name}</div>
              <div className="data-card-desc">{c.desc}</div>
              <div className="data-card-meta">
                <span className="data-card-badge">0 POSTS</span>
                <span className="data-card-badge">COMING SOON</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
