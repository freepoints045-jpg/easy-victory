import { DownloadSection } from '@/components/download-section'
import { GoldParticles } from '@/components/gold-particles'
import { HeroSection } from '@/components/hero-section'
import { NoticeSection } from '@/components/notice-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { StepsSection } from '@/components/steps-section'

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,170,0,0.22), transparent 60%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,110,0,0.14), transparent 70%), repeating-linear-gradient(135deg, rgba(255,196,0,0.025) 0 2px, transparent 2px 22px)',
        }}
      />
      <GoldParticles />
      <div className="relative z-10">
        <SiteHeader />
        <main>
          <HeroSection />
          <DownloadSection />
          <NoticeSection />
          <StepsSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
