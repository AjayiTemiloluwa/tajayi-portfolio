import {
  Cpu,
  TrendingUp,
  Zap,
  GraduationCap,
  Users,
  ChefHat,
  Dumbbell,
  Gamepad2,
  Plug,
  AudioLines,
} from 'lucide-react'
import { interests, type Interest } from '@/data/interests'
import { skillGroups } from '@/data/community'
import { PageShell } from '@/components/PageShell'
import { Reveal } from '@/components/ui/Reveal'

/**
 * /interests — what drives the work (the professional lenses) plus the
 * curiosity shelf: cooking, calisthenics, gaming, circuits & cooling,
 * sound engineering — and the toolkit that backs it (skill groups from
 * the CV).
 */
export const metadata = {
  title: 'Interests — Temiloluwa Samuel Ajayi',
  description:
    'AI & intelligent systems, energy & sustainability, financial engineering, teaching — plus cooking, calisthenics, gaming, electrical & refrigeration work, and sound engineering.',
}

const ICONS = {
  cpu: Cpu,
  'trending-up': TrendingUp,
  zap: Zap,
  'graduation-cap': GraduationCap,
  users: Users,
  'chef-hat': ChefHat,
  dumbbell: Dumbbell,
  gamepad: Gamepad2,
  plug: Plug,
  audio: AudioLines,
  wind: Zap,
} as const

export default function InterestsPage() {
  return (
    <PageShell
      ghost="DRIVE"
      kicker="Interests"
      title={[{ text: 'One curiosity, ' }, { text: 'eleven lenses.', sepia: true }]}
      blurb="Serious work, fully lived — from drilling automation to Sunday jollof."
    >
      <section className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-fg/50">What pulls me</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((interest: Interest, i) => {
            const Icon = ICONS[interest.icon]
            return (
              <Reveal key={interest.title} delay={i * 60}>
                <article className="glass group h-full rounded-xl p-6 transition hover:-translate-y-0.5" data-cursor="MORE">
                  <span className="glass inline-flex h-11 w-11 items-center justify-center rounded-lg text-sepia transition group-hover:border-sepia">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold leading-snug text-parchment">{interest.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg/60">{interest.blurb}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="hairline-top bg-mist/40">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-fg/50">The toolkit</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <Reveal key={group.label} delay={i * 70}>
                <div className="glass h-full rounded-xl p-6">
                  <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-sepia">{group.label}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li key={skill} className="rounded-full border border-sepia/20 px-2.5 py-1 font-mono text-[10px] text-parchment/80">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
