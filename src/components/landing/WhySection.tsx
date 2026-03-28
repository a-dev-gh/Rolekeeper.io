const cards = [
  {
    icon: '⚔',
    title: 'Roles That Remember',
    desc: 'Build named AI personas — Engineer, Writer, Analyst — each with its own identity and prompt library. The right mindset, every time.',
    badge: 'CORE FEATURE',
  },
  {
    icon: '📜',
    title: 'A Workflow That Stacks',
    desc: 'Mission → Role → Quest → Log. Same structure every session. That\'s what turns scattered AI use into a skill that actually grows.',
    badge: 'THE ROLEKEEPER METHOD',
  },
  {
    icon: '📡',
    title: 'Nothing Gets Lost',
    desc: 'Every session logged with your prompt, the output, a rating, and notes. Your best work stays searchable — stop re-inventing, start refining.',
    badge: 'SESSION TRACKING',
  },
  {
    icon: '🏆',
    title: 'Progress You Can See',
    desc: 'XP for every logged session. Unlimited levels, real titles. The more you log, the sharper your workflow gets.',
    badge: 'BUILT-IN ANALYTICS',
  },
]

export function WhySection() {
  return (
    <section id="why">
      <div className="section-inner">
        <span className="tag">WHY ROLEKEEPER</span>
        <h2 className="section-heading">
          Most AI tools leave you<br />
          <span className="mg">starting over every session.</span>
        </h2>
        <p className="section-sub">
          No context, no history, no progress. RoleKeeper fixes that — one place for your roles, prompts, logs, and growth.
        </p>

        <div className="why-grid">
          {cards.map((card) => (
            <div className="glass why-card reveal" key={card.title}>
              <div className="wico">{card.icon}</div>
              <div className="wh">{card.title}</div>
              <div className="wp">{card.desc}</div>
              <span className="wbadge">{card.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
