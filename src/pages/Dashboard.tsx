import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useAuth } from '../hooks/useAuth'
import { supabase } from '../lib/supabase'
import { APP_URL } from '../lib/constants'

interface DashStats {
  totalQuests: number
  totalXP: number
  level: number
  streak: number
  topRoles: { name: string; count: number }[]
  guilds: string[]
}

export default function Dashboard() {
  const { profile } = useAuth()
  const [stats, setStats] = useState<DashStats>({
    totalQuests: 0, totalXP: 0, level: 1, streak: 0,
    topRoles: [], guilds: [],
  })
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!profile) return

    async function loadStats() {
      try {
        // Get XP log count for this user
        const { count: questCount } = await supabase
          .from('xp_log')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', profile!.id)

        // Get guild memberships
        const { data: guildData } = await supabase
          .from('guild_members')
          .select('guilds(name)')
          .eq('user_id', profile!.id)

        const guildNames = guildData?.map((g: Record<string, unknown>) => {
          const guild = g.guilds as { name: string } | null
          return guild?.name ?? ''
        }).filter(Boolean) ?? []

        setStats({
          totalQuests: questCount ?? 0,
          totalXP: profile!.xp ?? 0,
          level: profile!.level ?? 1,
          streak: 0,
          topRoles: [],
          guilds: guildNames,
        })
        setLoaded(true)
      } catch {
        setLoaded(true)
      }
    }

    loadStats()
  }, [profile])

  const displayName = profile?.username || 'User'

  return (
    <>
      <Helmet><title>Dashboard — RoleKeeper</title></Helmet>

      <div className="dashboard-page">
        <div className="dashboard-header">
          <div className="dashboard-greeting">
            <h1>Welcome, <span className="mg">{displayName}</span></h1>
            <p>Here's your RoleKeeper activity overview.</p>
          </div>
          <a href={APP_URL} className="dashboard-open-app" target="_blank" rel="noopener noreferrer">
            OPEN QUEST APP →
          </a>
        </div>

        <div className="dashboard-stats">
          <div className="glass dash-stat">
            <div className="dash-stat-value">{loaded ? stats.level : '—'}</div>
            <div className="dash-stat-label">LEVEL</div>
          </div>
          <div className="glass dash-stat">
            <div className="dash-stat-value">{loaded ? stats.totalXP.toLocaleString() : '—'}</div>
            <div className="dash-stat-label">TOTAL XP</div>
          </div>
          <div className="glass dash-stat">
            <div className="dash-stat-value">{loaded ? stats.totalQuests.toLocaleString() : '—'}</div>
            <div className="dash-stat-label">QUESTS LOGGED</div>
          </div>
          <div className="glass dash-stat">
            <div className="dash-stat-value">{loaded ? stats.guilds.length : '—'}</div>
            <div className="dash-stat-label">GUILDS JOINED</div>
          </div>
        </div>

        <div className="dashboard-sections">
          <div className="glass dash-section">
            <div className="dash-section-title">YOUR PROFILE</div>
            <h3>{profile?.avatar_emoji || '⚔'} {displayName}</h3>
            <p>{profile?.bio || 'No bio yet. Set one in the Quest app under Settings.'}</p>
            <p style={{ marginTop: 8, fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--t3)', letterSpacing: 1 }}>
              {profile?.title || 'Novice'} · Level {stats.level}
            </p>
          </div>

          <div className="glass dash-section">
            <div className="dash-section-title">YOUR GUILDS</div>
            {stats.guilds.length > 0 ? (
              <ul className="dash-role-list">
                {stats.guilds.map(g => (
                  <li className="dash-role-item" key={g}>{g}</li>
                ))}
              </ul>
            ) : (
              <div className="dash-empty">
                No guilds yet. Join one in the Quest app.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
