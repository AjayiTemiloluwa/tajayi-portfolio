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
      'Full-stack platform for regulatory compliance tracking, litigation case management and reporting — with Google Workspace integration and automated PDF report generation.',
    featured: true,
  },
  {
    title: 'Automated Compliance Escalation System',
    org: 'Sankore Investment',
    year: '2026',
    stack: ['n8n', 'Branded HTML email', 'Audit logging'],
    summary:
      'Daily reminder engine routing pre-deadline nudges and multi-level post-deadline escalations to team-specific inboxes, with full audit logging and deduplication.',
  },
  {
    title: 'Biometric Attendance Prototype',
    org: 'SLB Nigeria',
    year: '2025',
    stack: ['Python', 'Data validation', 'Excel dashboards'],
    summary:
      'Structured data logging with validation logic and automated reporting outputs — cutting processing delays by 35% and sharpening access-control monitoring.',
  },
  {
    title: 'Data Pipelines & KPI Tracking',
    org: 'GOLEARN Africa',
    year: '2024',
    stack: ['Python', 'SQL', 'Advanced Excel'],
    summary:
      'Automated relational pipelines plus AI-assisted performance and engagement tracking — reducing manual reporting by 40% and lifting KPI visibility.',
  },
  {
    title: 'Conflict Impact Research',
    org: 'Freelance Data Science',
    year: '2023',
    stack: ['Pandas', 'NumPy', 'Thematic coding'],
    summary:
      'Quantitative and qualitative analysis of the Ukraine–Russia conflict’s impact on African students, with structured thematic coding for data-driven insights.',
  },
  {
    title: 'Math × Chemistry Correlation Study',
    org: 'Freelance Data Science',
    year: '2022',
    stack: ['Python regression', 'Matplotlib', 'Tableau'],
    summary:
      'Correlation study on Mathematics and Chemistry performance using regression analysis and visualization to support actionable recommendations.',
  },
]