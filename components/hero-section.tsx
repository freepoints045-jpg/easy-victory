import Image from 'next/image'
import { KeyRound, Sparkles } from 'lucide-react'
import { GlowButton } from '@/components/glow-button'
import { TELEGRAM_BOT_URL } from '@/lib/links'

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex flex-col items-center px-4 pt-8 pb-16 text-center sm:pt-14"
    >
      <div className="relative mb-4 size-60 sm:size-80">
        <div
          className="animate-spin-slow absolute inset-0 rounded-full opacity-60"
          style={{
            background:
              'conic-gradient(from 0deg, transparent, rgba(255,196,0,0.5), transparent 30%, rgba(255,138,0,0.45), transparent 60%, rgba(255,224,102,0.5), transparent)',
            filter: 'blur(28px)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-6 rounded-full bg-[radial-gradient(circle,rgba(255,190,0,0.35),transparent_70%)]"
          aria-hidden="true"
        />
        <Image
          src="/images/ev-logo.png"
          alt="Easy Victory Global golden EV logo with crown"
          width={320}
          height={320}
          priority
          className="animate-float-logo relative size-full object-contain logo-fade"
        />
      </div>

      <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 font-display text-xs font-bold tracking-[0.25em] text-gold-bright sm:text-sm">
        <Sparkles className="size-4" aria-hidden="true" />
        EASY VICTORY GLOBAL
      </p>

      <h1
        id="hero-title"
        className="font-display text-4xl leading-[1.05] font-black text-balance uppercase sm:text-6xl md:text-7xl"
      >
        <span className="text-gold-gradient text-glow">EV Loader</span>
        <br />
        <span className="text-white drop-shadow-[0_0_20px_rgba(255,180,0,0.35)]">is Back!</span>
      </h1>

      <p className="mt-5 max-w-md text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
        Download{' '}
        <strong className="font-semibold text-white">Easy Victory Non Stop Winning</strong> APK.
      </p>

      <div className="mt-9 w-full max-w-sm">
        <GlowButton
          href={TELEGRAM_BOT_URL}
          variant="key"
          icon={<KeyRound strokeWidth={2.75} aria-hidden="true" />}
          ariaLabel="Get your key from the Easy Victory Global Telegram bot (opens in a new tab)"
        >
          Get Your Key
        </GlowButton>
        <p className="mt-4 text-xs tracking-wide text-muted-foreground">
          Instant key via official Telegram bot
        </p>
      </div>
    </section>
  )
}
