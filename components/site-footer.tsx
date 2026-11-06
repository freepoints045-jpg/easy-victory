import Image from 'next/image'
import { Send } from 'lucide-react'
import { TELEGRAM_BOT_URL } from '@/lib/links'

export function SiteFooter() {
  return (
    <footer className="relative border-t border-gold/20 bg-black/80 px-4 pt-12 pb-8">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Image
          src="/images/ev-logo.png"
          alt=""
          width={80}
          height={80}
          className="size-20 logo-fade"
        />
        <p className="mt-2 font-display text-xl font-black tracking-wider text-gold-gradient">
          EASY VICTORY GLOBAL
        </p>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Need help or a new key? Contact us on Telegram.
        </p>
        <a
          href={TELEGRAM_BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#229ED9] px-6 py-3 text-sm font-bold text-white shadow-[0_0_24px_rgba(34,158,217,0.45)] transition hover:scale-105 hover:shadow-[0_0_36px_rgba(34,158,217,0.7)] active:scale-95"
        >
          <Send className="size-4" aria-hidden="true" />
          Contact on Telegram
        </a>
        <p className="mt-10 text-xs text-muted-foreground/70">
          {'© '}
          {new Date().getFullYear()} EASY VICTORY GLOBAL. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
