import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

interface LiveStats {
  totalUsers: number
  totalQuests: number
  totalRoles: number
}

export function Testimonials() {
  const [stats, setStats] = useState<LiveStats>({ totalUsers: 0, totalQuests: 0, totalRoles: 0 })
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    async function fetchStats() {
      try {
        // Fetch total user count
        const { count: userCount } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true })

        // Fetch total quest/session log entries
        const { count: questCount } = await supabase
          .from('xp_log')
          .select('*', { count: 'exact', head: true })

        // Fetch total roles created (from pack_roles or packs)
        const { count: roleCount } = await supabase
          .from('pack_roles')
          .select('*', { count: 'exact', head: true })

        setStats({
          totalUsers: userCount ?? 0,
          totalQuests: questCount ?? 0,
          totalRoles: roleCount ?? 0,
        })
        setLoaded(true)
      } catch {
        // If Supabase isn't configured, show fallback
        setLoaded(false)
      }
    }

    fetchStats()
  }, [])

  return (
    <section id="stats">
      <div className="section-inner" style={{ textAlign: 'center' }}>
        <span className="tag">LIVE STATS</span>
        <h2 className="section-heading">
          Real users.<br />
          <span className="mg">Real sessions.</span>
        </h2>
        <p className="section-sub" style={{ margin: '0 auto 48px' }}>
          RoleKeeper is live and growing. These numbers update in real time from our database.
        </p>

        <div className="stats-grid">
          <div className="glass stat-card">
            <div className="stat-number">{loaded ? (stats.totalUsers ?? 0).toLocaleString() : '—'}</div>
            <div className="stat-label">ACCOUNTS CREATED</div>
          </div>
          <div className="glass stat-card">
            <div className="stat-number">{loaded ? (stats.totalQuests ?? 0).toLocaleString() : '—'}</div>
            <div className="stat-label">QUESTS LOGGED</div>
          </div>
          <div className="glass stat-card">
            <div className="stat-number">{loaded ? (stats.totalRoles ?? 0).toLocaleString() : '—'}</div>
            <div className="stat-label">ROLES CREATED</div>
          </div>
          <div className="glass stat-card">
            <div className="stat-number">{loaded ? ((stats.totalQuests ?? 0) + (stats.totalUsers ?? 0)).toLocaleString() : '—'}</div>
            <div className="stat-label">SESSIONS LOGGED</div>
          </div>
        </div>
      </div>
    </section>
  )
}
