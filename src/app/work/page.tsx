import { Work } from '@/components/sections/Work'
import { PageShell } from '@/components/PageShell'

/**
 * /work — the full work index as its own page; the home page keeps a
 * short journey below the hero.
 */
export const metadata = {
  title: 'Work — Temiloluwa Samuel Ajayi',
  description: 'Compliance platforms, escalation engines, data pipelines and research studies — shipped at Sankore, SLB and GOLEARN Africa.',
}

export default function WorkPage() {
  return (
    <PageShell
      ghost="WORK"
      kicker="Selected work"
      title={[{ text: 'The work ' }, { text: 'ledger.', sepia: true }]}
      blurb="Built at Sankore, SLB, GOLEARN Africa and in between."
    >
      <Work embedded />
    </PageShell>
  )
}
