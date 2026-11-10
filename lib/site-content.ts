import { createClient } from '@/lib/supabase/server'

export type SiteContent = {
  brandName: string; heroTitle: string; heroAccent: string; heroDescription: string; announcement: string; downloadUrl: string; downloadButtonText: string; telegramUrl: string; keyButtonText: string; version: string; footerText: string; logoUrl: string; showAnnouncement: boolean; showDownload: boolean; showFooter: boolean; maintenanceMode: boolean
}

export const fallbackContent: SiteContent = {
  brandName: 'EASY VICTORY GLOBAL', heroTitle: 'EV Loader', heroAccent: 'is Back!', heroDescription: 'Download Easy Victory Non Stop Winning APK.', announcement: 'EV Loader is back. Download the latest working APK.', downloadUrl: 'https://www.mediafire.com/', downloadButtonText: 'Download Now', telegramUrl: 'https://t.me/easyvictoryglobalbot', keyButtonText: 'Get Your Key', version: '19.6.0', footerText: 'EASY VICTORY GLOBAL', logoUrl: '/images/ev-logo.png', showAnnouncement: true, showDownload: true, showFooter: true, maintenanceMode: false,
}

export async function getPublishedContent(): Promise<SiteContent> {
  try {
    const supabase = await createClient()
    const { data } = await supabase.from('site_content').select('published').eq('id', true).maybeSingle()
    return { ...fallbackContent, ...(data?.published as Partial<SiteContent> | undefined) }
  } catch { return fallbackContent }
}
