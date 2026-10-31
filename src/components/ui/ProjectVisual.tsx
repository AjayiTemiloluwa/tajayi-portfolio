import { BarChart3, Fingerprint, FlaskConical, ShieldCheck, Workflow } from 'lucide-react'
import type { WorkVisual } from '@/data/work'

/**
 * Abstract per-project mark — not a screenshot (these are private client
 * builds), but a distinct icon + pattern so the work ledger reads as
 * visual cards instead of a plain text list.
 */
const VISUALS: Record<WorkVisual, { Icon: typeof ShieldCheck; label: string }> = {
  compliance: { Icon: ShieldCheck, label: 'Platform' },
  automation: { Icon: Workflow, label: 'Automation' },
  biometric: { Icon: Fingerprint, label: 'Systems' },
  pipeline: { Icon: BarChart3, label: 'Data' },
  research: { Icon: FlaskConical, label: 'Research' },
  analysis: { Icon: BarChart3, label: 'Analysis' },
}

export function ProjectVisual({ visual, featured = false }: { visual: WorkVisual; featured?: boolean }) {
  const { Icon, label } = VISUALS[visual]
  return (
    <div
      className={`relative flex h-32 w-full shrink-0 items-center justify-center overflow-hidden rounded-lg sm:h-auto sm:w-36 ${
        featured ? 'glass-sepia' : 'glass'
      }`}
      aria-hidden="true"
    >
      {/* faint dot grid for texture */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '14px 14px', color: 'var(--sepia)' }}
      />
      <Icon className="relative h-10 w-10 text-sepia/70" strokeWidth={1.25} />
      <span className="absolute bottom-2 right-2.5 font-mono text-[8px] font-bold uppercase tracking-[0.16em] text-sepia/50">
        {label}
      </span>
    </div>
  )
}
