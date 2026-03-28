import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useAuth } from '../hooks/useAuth'
import { supabase } from '../lib/supabase'

export default function DashboardProfile() {
  const { profile, user, signOut } = useAuth()
  const [bio, setBio] = useState(profile?.bio || '')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  async function handleSave() {
    if (!user) return
    setSaving(true)
    await supabase
      .from('profiles')
      .update({ bio })
      .eq('id', user.id)
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <>
      <Helmet><title>Profile Settings — RoleKeeper</title></Helmet>

      <div className="legal-page">
        <span className="legal-tag">SETTINGS</span>
        <h1 className="legal-title">Profile Settings</h1>
        <div className="legal-updated">Manage your RoleKeeper account</div>

        <div className="highlight-box">
          <p><strong>Account email:</strong> {user?.email || '—'}</p>
        </div>

        <h2>Your Profile</h2>
        <div style={{ marginBottom: 16 }}>
          <div className="login-field">
            <label className="login-label">USERNAME</label>
            <input
              className="login-input"
              value={profile?.username || ''}
              disabled
              style={{ opacity: 0.6 }}
            />
            <p style={{ fontSize: 11, color: 'var(--t3)', marginTop: 6 }}>
              Username changes are managed in the Quest app.
            </p>
          </div>

          <div className="login-field">
            <label className="login-label">BIO</label>
            <textarea
              className="login-input"
              value={bio}
              onChange={e => setBio(e.target.value)}
              rows={3}
              placeholder="Tell people about yourself..."
              style={{ resize: 'vertical', fontFamily: 'var(--fb)' }}
            />
          </div>

          <button
            className="login-submit"
            onClick={handleSave}
            disabled={saving}
            style={{ maxWidth: 200 }}
          >
            {saved ? '✓ SAVED' : saving ? 'SAVING...' : 'SAVE CHANGES'}
          </button>
        </div>

        <h2>Account Info</h2>
        <ul>
          <li><strong>Level:</strong> {profile?.level || 1}</li>
          <li><strong>XP:</strong> {profile?.xp || 0}</li>
          <li><strong>Title:</strong> {profile?.title || 'Novice'}</li>
          <li><strong>Joined:</strong> {profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : '—'}</li>
        </ul>

        <h2>Danger Zone</h2>
        <p>Signing out will not delete any data. You can log back in anytime.</p>
        <button
          className="btn-ghost"
          onClick={signOut}
          style={{ marginTop: 8, color: 'var(--red)', borderColor: 'rgba(239,68,68,.3)' }}
        >
          SIGN OUT
        </button>
      </div>
    </>
  )
}
