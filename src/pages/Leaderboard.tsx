import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

interface LeaderboardEntry {
  id: string
  username: string
  avatar_emoji: string
  title: string
  xp: number
  level: number
}

export default function Leaderboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from('profiles')
        .select('id, username, avatar_emoji, title, xp, level')
        .eq('visibility', 'public')
        .order('xp', { ascending: false })
        .limit(50)
      setEntries((data as LeaderboardEntry[]) ?? [])
      setLoading(false)
    }
    load()
  }, [])

  const rankClass = (i: number) => {
    if (i === 0) return 'lb-rank gold'
    if (i === 1) return 'lb-rank silver'
    if (i === 2) return 'lb-rank bronze'
    return 'lb-rank'
  }

  return (
    <>
      <Helmet><title>Leaderboard — RoleKeeper</title></Helmet>
      <div className="data-page">
        <div className="data-page-header">
          <span className="legal-tag" style={{ display: 'block', marginBottom: 12 }}>RANKINGS</span>
          <h1>Leader<span className="mg">board</span></h1>
          <p>Top users by activity and XP.</p>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: 60, fontFamily: 'var(--fm)', fontSize: 12, color: 'var(--t3)' }}>Loading leaderboard...</div>
        ) : entries.length === 0 ? (
          <div className="glass" style={{ padding: 40, textAlign: 'center' }}>
            <p style={{ fontSize: 16, color: 'var(--t2)' }}>No public profiles yet.</p>
            <p style={{ fontSize: 13, color: 'var(--t3)', marginTop: 8 }}>Set your profile to public in the Quest app to appear here.</p>
          </div>
        ) : (
          <div className="glass" style={{ overflow: 'auto', borderRadius: 16 }}>
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th>RANK</th>
                  <th>USER</th>
                  <th>LEVEL</th>
                  <th style={{ textAlign: 'right' }}>XP</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((e, i) => (
                  <tr key={e.id}>
                    <td className={rankClass(i)}>#{i + 1}</td>
                    <td>
                      <Link to={`/u/${e.username}`} className="lb-user" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <span className="lb-avatar">{e.avatar_emoji || '⚔'}</span>
                        <div>
                          <div className="lb-name">{e.username}</div>
                          <div className="lb-title">{e.title || 'Novice'}</div>
                        </div>
                      </Link>
                    </td>
                    <td className="lb-level">{e.level}</td>
                    <td className="lb-xp" style={{ textAlign: 'right' }}>{e.xp?.toLocaleString()} XP</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}
