import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type GlowButtonProps = {
  href: string
  variant: 'key' | 'download'
  icon: ReactNode
  children: ReactNode
  showPointer?: boolean
  className?: string
  ariaLabel?: string
}

export function GlowButton({
  href,
  variant,
  icon,
  children,
  showPointer = false,
  className,
  ariaLabel,
}: GlowButtonProps) {
  return (
    <div className={cn('relative inline-flex w-full', className)}>
      <span className="glow-halo" aria-hidden="true" />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={cn(
          'glow-btn flex w-full items-center justify-center gap-3 rounded-full px-6 py-4 font-display text-lg font-black uppercase tracking-wider sm:py-5 sm:text-xl',
          variant === 'key' ? 'glow-btn-key' : 'glow-btn-download',
        )}
      >
        <span className="shrink-0 [&_svg]:size-6 sm:[&_svg]:size-7">{icon}</span>
        <span>{children}</span>
      </a>
      {showPointer && <TapPointer />}
    </div>
  )
}

function TapPointer() {
  return (
    <span
      className="pointer-events-none absolute -right-1 -bottom-5 z-10 sm:-right-3 sm:-bottom-6"
      aria-hidden="true"
    >
      <span className="animate-tap-ripple absolute top-0 left-0 size-6 rounded-full border-2 border-white/90" />
      <span className="animate-tap block">
        <svg
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="#ffffff"
          stroke="#1a0f00"
          strokeWidth="1.2"
          strokeLinejoin="round"
          className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
        >
          <path d="M9 11V4.5a1.5 1.5 0 0 1 3 0V10l.5-.1a1.5 1.5 0 0 1 3 .2v.4a1.5 1.5 0 0 1 3 .3v1.2a1.5 1.5 0 0 1 2.5.9V16a6 6 0 0 1-6 6h-1.8a6 6 0 0 1-4.6-2.2l-3.3-4a1.6 1.6 0 0 1 2.4-2.1L9 15z" />
        </svg>
      </span>
    </span>
  )
}
