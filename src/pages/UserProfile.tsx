import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

interface Profile {
  id: string
  username: string
  avatar_emoji: string
  bio: string
  title: string
  xp: number
  level: number
  visibility: string
  created_at: string
}

export default function UserProfile() {
  const { username } = useParams()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      if (!username) return
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('username', username)
        .single()
      if (data) setProfile(data as Profile)
      setLoading(false)
    }
    load()
  }, [username])

  if (loading) return <div className="data-page" style={{ textAlign: 'center', padding: 80, fontFamily: 'var(--fm)', fontSize: 12, color: 'var(--t3)' }}>Loading profile...</div>
  if (!profile) return <div className="data-page" style={{ textAlign: 'center', padding: 80 }}><h1>User not found</h1><Link to="/leaderboard" style={{ color: 'var(--mb)' }}>← Leaderboard</Link></div>

  return (
    <>
      <Helmet><title>{profile.username} — RoleKeeper</title></Helmet>
      <div className="data-page">
        <div className="profile-header">
          <div className="profile-avatar">{profile.avatar_emoji || '⚔'}</div>
          <div className="profile-info">
            <h1>{profile.username}</h1>
            <div className="profile-title">{profile.title || 'Novice'} · Level {profile.level}</div>
            {profile.bio && <div className="profile-bio">{profile.bio}</div>}
          </div>
        </div>

        <div className="profile-stats-row">
          <div className="profile-stat">
            <div className="profile-stat-val">{profile.level}</div>
            <div className="profile-stat-lbl">LEVEL</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-val">{profile.xp?.toLocaleString()}</div>
            <div className="profile-stat-lbl">TOTAL XP</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-val">{new Date(profile.created_at).toLocaleDateString()}</div>
            <div className="profile-stat-lbl">JOINED</div>
          </div>
        </div>
      </div>
    </>
  )
}
