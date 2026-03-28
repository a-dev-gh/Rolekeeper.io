export function FeatureStrip() {
  const items = [
    { icon: '⚔', label: 'Role System' },
    { icon: '📜', label: 'Quest Templates' },
    { icon: '📡', label: 'Session Log' },
    { icon: '🏆', label: 'XP & Levels' },
    { icon: '🎨', label: '3 Themes' },
    { icon: '∞', label: 'Free to Start' },
  ]

  return (
    <div className="strip">
      {items.map((item) => (
        <div className="strip-i" key={item.label}>
          {item.icon} <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}
