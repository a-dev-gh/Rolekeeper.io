import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

interface Guild {
  id: string
  name: string
  description: string
  banner_emoji: string
  member_count: number
  is_public: boolean
}

export default function Guilds() {
  const [guilds, setGuilds] = useState<Guild[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from('guilds')
        .select('*')
        .eq('is_public', true)
        .order('member_count', { ascending: false })
      setGuilds((data as Guild[]) ?? [])
      setLoading(false)
    }
    load()
  }, [])

  return (
    <>
      <Helmet><title>Guilds — RoleKeeper</title></Helmet>
      <div className="data-page">
        <div className="data-page-header">
          <span className="legal-tag" style={{ display: 'block', marginBottom: 12 }}>COMMUNITY</span>
          <h1>Guild <span className="mg">Directory</span></h1>
          <p>Browse and join public guilds.</p>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: 60, fontFamily: 'var(--fm)', fontSize: 12, color: 'var(--t3)' }}>Loading guilds...</div>
        ) : guilds.length === 0 ? (
          <div className="glass" style={{ padding: 40, textAlign: 'center' }}>
            <p style={{ fontSize: 16, color: 'var(--t2)', marginBottom: 8 }}>No public guilds yet.</p>
            <p style={{ fontSize: 13, color: 'var(--t3)', lineHeight: 1.7 }}>To create guilds and share pack libraries, storage is needed to keep things running. <a href="/donate" style={{ color: 'var(--mb)' }}>Support the build</a> to unlock these features.</p>
          </div>
        ) : (
          <div className="data-grid">
            {guilds.map(g => (
              <Link to={`/guilds/${g.id}`} className="glass data-card" key={g.id}>
                <span className="data-card-emoji">{g.banner_emoji || '⚔'}</span>
                <div className="data-card-name">{g.name}</div>
                <div className="data-card-desc">{g.description || 'No description.'}</div>
                <div className="data-card-meta">
                  <span className="data-card-badge">{g.member_count ?? 0} MEMBERS</span>
                  <span className="data-card-badge">PUBLIC</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
