import Image from 'next/image'
import { Download, FileArchive, ShieldCheck, Smartphone, Tag } from 'lucide-react'
import { GlowButton } from '@/components/glow-button'
import { Reveal } from '@/components/reveal'
import { APK_DOWNLOAD_URL } from '@/lib/links'

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.6 9.48l1.84-3.18a.38.38 0 0 0-.66-.38l-1.86 3.22a11.4 11.4 0 0 0-9.84 0L5.22 5.92a.38.38 0 0 0-.66.38L6.4 9.48A10.8 10.8 0 0 0 1 18h22a10.8 10.8 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
    </svg>
  )
}

const DETAILS = [
  { icon: Tag, label: 'Version', value: '19.6.0' },
  { icon: Smartphone, label: 'Platform', value: 'Android APK' },
  { icon: FileArchive, label: 'File Type', value: 'APK' },
  { icon: ShieldCheck, label: 'Status', value: 'Working' },
]

export function DownloadSection() {
  return (
    <section id="download" aria-labelledby="download-title" className="px-4 pb-14">
      <Reveal className="mx-auto max-w-xl">
        <h2
          id="download-title"
          className="mb-6 text-center font-display text-2xl font-black uppercase tracking-wide sm:text-3xl"
        >
          <span className="text-gold-gradient">Download</span> APK
        </h2>

        <article className="glow-card rounded-3xl p-5 sm:p-8">
          <div className="flex items-center gap-4">
            <div className="relative shrink-0 rounded-2xl border border-gold/40 bg-black p-1 shadow-[0_0_24px_rgba(255,180,0,0.35)]">
              <Image
                src="/images/ev-logo.png"
                alt=""
                width={72}
                height={72}
                className="size-16 rounded-xl sm:size-[72px]"
              />
              <span className="absolute -right-2 -bottom-2 flex size-7 items-center justify-center rounded-full bg-[#3ddc84] text-black ring-2 ring-black">
                <AndroidIcon className="size-4" />
              </span>
            </div>
            <div className="min-w-0 text-left">
              <h3 className="font-display text-lg leading-tight font-extrabold text-white sm:text-xl">
                Easy Victory Non Stop Winning
              </h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <AndroidIcon className="size-4 text-[#3ddc84]" />
                For Android devices
              </p>
            </div>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-3">
            {DETAILS.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-xl border border-gold/20 bg-black/50 px-3 py-3 transition hover:border-gold/50"
              >
                <dt className="flex items-center gap-1.5 text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
                  <Icon className="size-3.5 text-gold" aria-hidden="true" />
                  {label}
                </dt>
                <dd className="mt-1 font-display text-sm font-bold text-gold-bright sm:text-base">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 mb-4 px-1">
            <GlowButton
              href={APK_DOWNLOAD_URL}
              variant="download"
              icon={<Download strokeWidth={3} aria-hidden="true" />}
              showPointer
              ariaLabel="Download Easy Victory Non Stop Winning APK version 19.6.0 (opens MediaFire in a new tab)"
            >
              Download Now
            </GlowButton>
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Hosted on MediaFire · Free download
          </p>
        </article>
      </Reveal>
    </section>
  )
}
