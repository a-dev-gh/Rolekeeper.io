import { createClient } from '@supabase/supabase-js'

// Same Supabase project as the Quest app (rolekeeper.quest)
// Uses env vars with hardcoded fallbacks (public anon key is safe to expose)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://bhwiqgywmiuoktrwoanf.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJod2lxZ3l3bWl1b2t0cndvYW5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1OTQ2MjQsImV4cCI6MjA4OTE3MDYyNH0.U5e1WOEPyFp1bcoQmHLxD4yGZXdFmfPYwwy3FrDFnEo'

export const supabase = createClient(supabaseUrl, supabaseKey)
