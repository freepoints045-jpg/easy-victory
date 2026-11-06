import Image from 'next/image'
import { Send } from 'lucide-react'
import { TELEGRAM_BOT_URL } from '@/lib/links'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-gold/15 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/images/ev-logo.png"
            alt=""
            width={40}
            height={40}
            className="size-10 logo-fade"
          />
          <span className="font-display text-sm font-extrabold tracking-wider text-gold-gradient sm:text-base">
            EASY VICTORY GLOBAL
          </span>
        </a>
        <a
          href={TELEGRAM_BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gold-bright transition hover:bg-gold/20 hover:shadow-[0_0_20px_rgba(255,196,0,0.4)] active:scale-95 sm:text-sm"
        >
          <Send className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">Telegram</span>
          <span className="sm:hidden">Join</span>
        </a>
      </div>
    </header>
  )
}
