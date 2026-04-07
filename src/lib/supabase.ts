import { createClient } from '@supabase/supabase-js'

// Same Supabase project as the Quest app (rolekeeper.quest)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseKey)
