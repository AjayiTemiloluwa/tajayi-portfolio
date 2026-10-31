/**
 * Selected work — one-line stories of things built.
 */

export type WorkVisual = 'compliance' | 'automation' | 'biometric' | 'pipeline' | 'research' | 'analysis'

export type WorkItem = {
  title: string
  org: string
  year: string
  stack: readonly string[]
  summary: string
  /** The headline number pulled out of the summary, shown as a stat callout. */
  metric?: { value: string; label: string }
  /** Which abstract visual treatment represents this project. */
  visual: WorkVisual
  featured?: boolean
}

export const work: WorkItem[] = [
  {
    title: 'Compliance Management Platform',
    org: 'Sankore Investment',
    year: '2026',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'AWS S3'],
    summary:
      'Full-stack compliance platform — regulatory tracking, litigation management, automated reporting. Google Workspace and AWS S3 built in.',
    metric: { value: '11', label: 'linked data models' },
    visual: 'compliance',
    featured: true,
  },
  {
    title: 'Automated Compliance Escalation System',
    org: 'Sankore Investment',
    year: '2026',
    stack: ['n8n', 'Branded HTML email', 'Audit logging'],
    summary:
      'Daily reminder engine — pre-deadline nudges, multi-level escalations, full audit logging.',
    metric: { value: '3', label: 'escalation tiers automated' },
    visual: 'automation',
  },
  {
    title: 'Biometric Attendance Prototype',
    org: 'SLB Nigeria',
    year: '2025',
    stack: ['Python', 'Data validation', 'Excel dashboards'],
    summary:
      'Data logging with validation and automated reporting — 35% faster processing, sharper access control.',
    metric: { value: '35%', label: 'faster processing' },
    visual: 'biometric',
  },
  {
    title: 'Data Pipelines & KPI Tracking',
    org: 'GOLEARN Africa',
    year: '2024',
    stack: ['Python', 'SQL', 'Advanced Excel'],
    summary:
      'Automated pipelines plus AI-assisted tracking — 40% less manual reporting, clearer KPIs.',
    metric: { value: '40%', label: 'less manual reporting' },
    visual: 'pipeline',
  },
  {
    title: 'Conflict Impact Research',
    org: 'Freelance Data Science',
    year: '2023',
    stack: ['Pandas', 'NumPy', 'Thematic coding'],
    summary:
      'Quant + qualitative analysis of the conflict’s impact on African students, with structured thematic coding.',
    visual: 'research',
  },
  {
    title: 'Math × Chemistry Correlation Study',
    org: 'Freelance Data Science',
    year: '2022',
    stack: ['Python regression', 'Matplotlib', 'Tableau'],
    summary:
      'Regression analysis on subject performance, visualized for actionable recommendations.',
    visual: 'analysis',
  },
]