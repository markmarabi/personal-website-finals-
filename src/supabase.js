import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://supabase.com/dashboard/project/jyrmcpkjhrectlbgsjlm'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5cm1jcGtqaHJlY3RsYmdzamxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExNjA4MjUsImV4cCI6MjA3NjczNjgyNX0.CtyMeJ13lpP14hUOio12P04nta3ZNS3_o22QrmoiZsI'

export const supabase = createClient(supabaseUrl, supabaseKey)
