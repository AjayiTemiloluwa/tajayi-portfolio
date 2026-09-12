import { Work } from '@/components/sections/Work'
import { PageShell } from '@/components/PageShell'

/**
 * /work — the full work index as its own page; the home page keeps a
 * short journey below the hero.
 */
export const metadata = {
  title: 'Work — Temiloluwa Samuel Ajayi',
  description: 'Systems shipped at work, school and in between — compliance platforms, escalation engines, pipelines and research studies.',
}

export default function WorkPage() {
  return (
    <PageShell
      ghost="WORK"
      kicker="Selected work"
      title={[{ text: 'Things I’ve built that ' }, { text: 'decide.', gold: true }]}
      blurb="Systems shipped at work, school and in between — each one measured by what it saved, surfaced or settled."
    >
      <Work />
    </PageShell>
  )
}
