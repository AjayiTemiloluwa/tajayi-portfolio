import { Certifications } from '@/components/sections/Certifications'
import { PageShell } from '@/components/PageShell'

/**
 * /credentials — the full credentials ledger as its own page; the home
 * page keeps the same section lower down. Mirrors the /work pattern:
 * one component, an `embedded` toggle for the duplicate heading.
 */
export const metadata = {
  title: 'Credentials — Temiloluwa Samuel Ajayi',
  description:
    'Google Data Analytics, Harvard CS50, SPE and community recognition — every credential verified, with originals on file.',
}

export default function CredentialsPage() {
  return (
    <PageShell
      ghost="PROOF"
      kicker="Certifications & Recognition"
      title={[{ text: 'Credentials that ' }, { text: 'back the work.', sepia: true }]}
      blurb="Every credential verified — issuer, date, and a link or PDF to check it yourself."
    >
      <Certifications embedded />
    </PageShell>
  )
}
