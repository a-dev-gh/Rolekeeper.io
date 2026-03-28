import { Helmet } from 'react-helmet-async'

const roadmapItems = [
  { icon: '🚀', title: 'Core App Launch', desc: 'Full role system, quest flow, session logging, and XP progression.', status: 'LIVE', statusClass: 'rs-live' },
  { icon: '⚔', title: 'Role & Quest System', desc: 'Full role management, quest board, prompt assembly.', status: 'LIVE', statusClass: 'rs-live' },
  { icon: '📡', title: 'Session Logging', desc: 'Log every AI interaction with rating and notes.', status: 'LIVE', statusClass: 'rs-live' },
  { icon: '⚡', title: 'Session Mode', desc: 'Chain multiple prompts in one session. Earn 3-5 XP per prompt without resetting context.', status: 'LIVE', statusClass: 'rs-live' },
  { icon: '🏆', title: 'XP & Levels', desc: 'Unlimited levels, titles, and real progress tracking.', status: 'LIVE', statusClass: 'rs-live' },
  { icon: '🎨', title: '3 Themes', desc: 'Light, Dark, and Arcade mode. Your workspace, your vibe.', status: 'LIVE', statusClass: 'rs-live' },
  { icon: '🔐', title: 'Accounts & Cloud Sync', desc: 'Supabase auth. Your data follows you everywhere, on any device.', status: 'LIVE', statusClass: 'rs-live' },
  { icon: '🌐', title: 'Bilingual Support', desc: 'Full English and Spanish support throughout the app.', status: 'LIVE', statusClass: 'rs-live' },
  { icon: '💬', title: 'Built-in AI Chat', desc: 'Your API key. Run prompts directly inside RoleKeeper. No more tab switching.', status: 'NEXT', statusClass: 'rs-soon' },
  { icon: '💻', title: 'Local Execution', desc: 'Run prompts directly from your desktop. Your AI keys, your machine, no cloud needed.', status: 'SOON', statusClass: 'rs-soon' },
  { icon: '🔗', title: 'Quest Chains', desc: 'Multi-step prompt pipelines. Define once, run every time.', status: 'SOON', statusClass: 'rs-soon' },
  { icon: '🧩', title: 'Chrome Extension', desc: 'Your role library and quest templates wherever you browse.', status: 'PLANNED', statusClass: 'rs-plan' },
  { icon: '📱', title: 'Mobile App', desc: 'RoleKeeper on your phone. Log sessions on the go.', status: 'PLANNED', statusClass: 'rs-plan' },
  { icon: '🤝', title: 'Team Workspaces', desc: 'Shared roles, quests, and analytics for teams.', status: 'PLANNED', statusClass: 'rs-plan' },
]

export default function Roadmap() {
  return (
    <>
      <Helmet>
        <title>Roadmap — RoleKeeper</title>
      </Helmet>
      <div className="data-page">
        <div className="data-page-header">
          <span className="legal-tag" style={{ display: 'block', marginBottom: 12 }}>ROADMAP</span>
          <h1>Built in public. <span className="mg">No surprises.</span></h1>
          <p>Every update is logged. Every feature comes from real usage. Here's what's live and what's coming.</p>
        </div>

        <div className="road-grid">
          {roadmapItems.map(item => (
            <div
              className="glass road-card"
              key={item.title}
              style={item.status === 'LIVE' && item.title === 'Core App Launch' ? { borderColor: 'rgba(14,165,233,.35)', boxShadow: '0 0 28px var(--glow)' } : undefined}
            >
              <span className={`rs ${item.statusClass}`}>{item.status}</span>
              <span className="rico">{item.icon}</span>
              <div className="rh">{item.title}</div>
              <div className="rp">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
