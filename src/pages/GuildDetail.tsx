import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

interface Guild {
  id: string
  name: string
  description: string
  banner_emoji: string
  member_count: number
  owner_id: string
  created_at: string
}

interface Member {
  user_id: string
  role: string
  joined_at: string
  profiles: { username: string; avatar_emoji: string; level: number; title: string }
}

export default function GuildDetail() {
  const { id } = useParams()
  const [guild, setGuild] = useState<Guild | null>(null)
  const [members, setMembers] = useState<Member[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      if (!id) return
      const { data: gData } = await supabase.from('guilds').select('*').eq('id', id).single()
      if (gData) setGuild(gData as Guild)

      const { data: mData } = await supabase
        .from('guild_members')
        .select('user_id, role, joined_at, profiles(username, avatar_emoji, level, title)')
        .eq('guild_id', id)
        .order('joined_at', { ascending: true })
      setMembers((mData as unknown as Member[]) ?? [])
      setLoading(false)
    }
    load()
  }, [id])

  if (loading) return <div className="data-page" style={{ textAlign: 'center', padding: 80, fontFamily: 'var(--fm)', fontSize: 12, color: 'var(--t3)' }}>Loading guild...</div>
  if (!guild) return <div className="data-page" style={{ textAlign: 'center', padding: 80 }}><h1>Guild not found</h1><Link to="/guilds" style={{ color: 'var(--mb)' }}>← Back to guilds</Link></div>

  return (
    <>
      <Helmet><title>{guild.name} — RoleKeeper</title></Helmet>
      <div className="data-page">
        <div className="data-page-header">
          <div style={{ fontSize: 48, marginBottom: 12 }}>{guild.banner_emoji || '⚔'}</div>
          <h1>{guild.name}</h1>
          <p>{guild.description || 'No description.'}</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
            <span className="data-card-badge">{guild.member_count ?? members.length} MEMBERS</span>
            <span className="data-card-badge">CREATED {new Date(guild.created_at).toLocaleDateString()}</span>
          </div>
        </div>

        <h2 style={{ fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--mb)', letterSpacing: 2, marginBottom: 16 }}>MEMBERS</h2>

        {members.length === 0 ? (
          <div className="glass" style={{ padding: 30, textAlign: 'center', color: 'var(--t3)', fontFamily: 'var(--fm)', fontSize: 11 }}>No members yet.</div>
        ) : (
          <div className="data-grid">
            {members.map(m => (
              <Link to={`/u/${m.profiles?.username}`} className="glass data-card" key={m.user_id}>
                <span className="data-card-emoji">{m.profiles?.avatar_emoji || '⚔'}</span>
                <div className="data-card-name">{m.profiles?.username || 'Unknown'}</div>
                <div className="data-card-meta">
                  <span className="data-card-badge">Level {m.profiles?.level ?? 1}</span>
                  <span className="data-card-badge">{m.role?.toUpperCase()}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
