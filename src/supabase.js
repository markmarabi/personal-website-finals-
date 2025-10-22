import { createClient } from '@supabase/supabase-js'

// ⛔ Replace these with your actual Supabase project credentials
const supabaseUrl = 'https://YOUR-PROJECT-URL.supabase.co'
const supabaseKey = 'YOUR-ANON-KEY'

export const supabase = createClient(supabaseUrl, supabaseKey)
