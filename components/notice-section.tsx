import { TriangleAlert } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function NoticeSection() {
  return (
    <section aria-labelledby="notice-title" className="px-4 pb-14">
      <Reveal className="mx-auto max-w-xl">
        <div
          role="note"
          className="relative overflow-hidden rounded-2xl border-2 border-ember/70 bg-gradient-to-br from-ember/15 via-black to-black p-5 shadow-[0_0_30px_rgba(255,120,0,0.25)] sm:p-6"
        >
          <div className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 animate-pulse items-center justify-center rounded-xl bg-gradient-to-b from-gold-bright to-ember text-black shadow-[0_0_20px_rgba(255,150,0,0.6)]">
              <TriangleAlert className="size-6" strokeWidth={2.5} aria-hidden="true" />
            </span>
            <div className="text-left">
              <h2
                id="notice-title"
                className="font-display text-base font-black tracking-widest text-gold-gradient uppercase sm:text-lg"
              >
                Important
              </h2>
              <p className="mt-1.5 leading-relaxed text-pretty text-white">
                Delete the old <strong className="text-gold-bright">Carrom Pool</strong> version
                before installing the new version.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
