import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getPublishedContent } from '@/lib/site-content'
import AdminDashboard from './admin-dashboard'

export default async function AdminPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle()
  if (profile?.role !== 'admin') redirect('/?error=unauthorized')
  return <AdminDashboard initial={await getPublishedContent()} />
}
