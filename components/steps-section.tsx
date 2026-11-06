import { Download, KeyRound, Trash2, Trophy } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const STEPS = [
  { icon: Trash2, title: 'Remove Old Version', text: 'Uninstall the old Carrom Pool app first.' },
  { icon: Download, title: 'Download APK', text: 'Get v19.6.0 from the download button.' },
  { icon: KeyRound, title: 'Get Your Key', text: 'Open our Telegram bot to receive your key.' },
  { icon: Trophy, title: 'Start Winning', text: 'Install, enter your key and play non stop.' },
]

export function StepsSection() {
  return (
    <section aria-labelledby="steps-title" className="px-4 pb-16">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2
            id="steps-title"
            className="mb-8 text-center font-display text-2xl font-black uppercase sm:text-3xl"
          >
            How to <span className="text-gold-gradient">Install</span>
          </h2>
        </Reveal>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <Reveal delay={i * 100} className="h-full">
                <div className="group h-full rounded-2xl border border-gold/20 bg-card/80 p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_0_30px_rgba(255,180,0,0.25)]">
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/40 transition group-hover:bg-gold group-hover:text-black">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-3xl font-black text-gold/20">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-sm font-bold tracking-wide text-white uppercase">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
