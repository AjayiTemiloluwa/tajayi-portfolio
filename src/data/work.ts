/**
 * Selected work — one-line stories of things built.
 */

export type WorkItem = {
  title: string
  org: string
  year: string
  stack: readonly string[]
  summary: string
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
    featured: true,
  },
  {
    title: 'Automated Compliance Escalation System',
    org: 'Sankore Investment',
    year: '2026',
    stack: ['n8n', 'Branded HTML email', 'Audit logging'],
    summary:
      'Daily reminder engine — pre-deadline nudges, multi-level escalations, full audit logging.',
  },
  {
    title: 'Biometric Attendance Prototype',
    org: 'SLB Nigeria',
    year: '2025',
    stack: ['Python', 'Data validation', 'Excel dashboards'],
    summary:
      'Data logging with validation and automated reporting — 35% faster processing, sharper access control.',
  },
  {
    title: 'Data Pipelines & KPI Tracking',
    org: 'GOLEARN Africa',
    year: '2024',
    stack: ['Python', 'SQL', 'Advanced Excel'],
    summary:
      'Automated pipelines plus AI-assisted tracking — 40% less manual reporting, clearer KPIs.',
  },
  {
    title: 'Conflict Impact Research',
    org: 'Freelance Data Science',
    year: '2023',
    stack: ['Pandas', 'NumPy', 'Thematic coding'],
    summary:
      'Quant + qualitative analysis of the conflict’s impact on African students, with structured thematic coding.',
  },
  {
    title: 'Math × Chemistry Correlation Study',
    org: 'Freelance Data Science',
    year: '2022',
    stack: ['Python regression', 'Matplotlib', 'Tableau'],
    summary:
      'Regression analysis on subject performance, visualized for actionable recommendations.',
  },
]