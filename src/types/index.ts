/* ── CORE TYPES FOR ROLEKEEPER.IO ─────────────────────── */

export type Theme = 'light' | 'dark' | 'arcade'

export interface Profile {
  id: string
  username: string
  avatar_emoji: string
  bio: string
  title: string
  xp: number
  level: number
  visibility: 'public' | 'private'
  created_at: string
}

export interface Guild {
  id: string
  name: string
  description: string
  banner_emoji: string
  owner_id: string
  is_public: boolean
  member_count: number
  created_at: string
}

export interface GuildMember {
  user_id: string
  guild_id: string
  role: 'owner' | 'admin' | 'member'
  joined_at: string
  profiles: Profile
}

export interface LeaderboardEntry {
  id: string
  username: string
  avatar_emoji: string
  title: string
  xp: number
  level: number
}

export interface ForumCategory {
  id: string
  name: string
  slug: string
  description: string
  sort_order: number
}

export interface ForumPost {
  id: string
  category_id: string
  author_id: string
  title: string
  body: string
  created_at: string
  updated_at: string
  is_pinned: boolean
  is_locked: boolean
  reply_count: number
  view_count: number
  author?: Profile
  category?: ForumCategory
}

export interface ForumReply {
  id: string
  post_id: string
  author_id: string
  body: string
  created_at: string
  updated_at: string
  author?: Profile
}

export interface QuestLogEntry {
  id: string
  role_name: string
  role_color: string
  quest_name: string
  input: string
  output: string
  rating: number
  xp_earned: number
  created_at: string
}

export interface DashboardStats {
  total_quests: number
  total_sessions: number
  current_level: number
  current_xp: number
  xp_for_next: number
  streak_days: number
  top_roles: { name: string; count: number; color: string }[]
}
