/**
 * Experience timeline + education.
 */

export type Role = {
  title: string
  org: string
  place: string
  period: string
  bullets: readonly string[]
  tags: readonly string[]
  current?: boolean
}

export const experience: Role[] = [
  {
    title: 'AI & Automation Analyst',
    org: 'Sankore Investment',
    place: 'Lagos, Nigeria',
    period: 'Apr 2026 — Present',
    current: true,
    bullets: [
      'Built and deployed an automated compliance reminder & escalation system with n8n — daily runs, team-specific routing, branded HTML templates, full audit logging.',
      'Developed a full-stack compliance platform (Next.js/TypeScript) for regulatory tracking, litigation management and reporting, integrated with Google Workspace and AWS S3.',
      'Designed an 11-model PostgreSQL/Prisma schema with migration, backfill and cross-database reconciliation scripts that safeguard production data integrity.',
    ],
    tags: ['n8n', 'Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'AWS'],
  },
  {
    title: 'Coding Tutor',
    org: 'Tutorszone.ng',
    place: 'Ibadan, Nigeria',
    period: 'May 2025 — Apr 2026',
    bullets: [
      'Delivered Python-based instruction in data analysis and data structures to K–12 and adult learners across four continents — 95% certification completion on freeCodeCamp and Coursera.',
      'Led hands-on projects with Pandas, NumPy, Matplotlib, Seaborn, SQL and Excel; built reporting templates that improved analytical accuracy by ~35%.',
    ],
    tags: ['Python', 'Pandas', 'NumPy', 'SQL', 'Teaching'],
  },
  {
    title: 'Freelance Data Scientist',
    org: 'Independent',
    place: 'Remote',
    period: 'Dec 2022 — Apr 2026',
    bullets: [
      'Quantitative + qualitative analysis of the Ukraine–Russia conflict’s impact on African students with Advanced Excel, Pandas, NumPy and structured thematic coding.',
      'Correlation study on Mathematics and Chemistry performance — regression in Python, visualization in Matplotlib and Tableau.',
    ],
    tags: ['Python', 'Excel', 'Tableau', 'Research'],
  },
  {
    title: 'Reservoir Performance Intern',
    org: 'SLB Nigeria Limited',
    place: 'Port Harcourt, Nigeria',
    period: 'Nov 2024 — Apr 2025',
    bullets: [
      'Developed a Python biometric attendance prototype with automated Excel dashboards — reduced processing delays by 35% and improved access-control accuracy.',
      'Managed operational inventory datasets with validation and structured updates, improving data accuracy and decision support by 20%.',
    ],
    tags: ['Python', 'Excel', 'Enterprise systems'],
  },
  {
    title: 'Data Analyst',
    org: 'GOLEARN Africa',
    place: 'Lagos, Nigeria',
    period: 'Sep 2023 — Mar 2025',
    bullets: [
      'Built automated data pipelines and relational databases with Python, SQL and Excel — improving reporting accuracy and operational efficiency by 30%.',
      'Built AI-assisted performance and engagement tracking, cutting manual reporting by 40% and enhancing KPI visibility for decision-makers.',
    ],
    tags: ['Python', 'SQL', 'AI-assisted reporting'],
  },
]

export type Education = {
  degree: string
  school: string
  place: string
  period: string
  current?: boolean
}

export const education: Education[] = [
  {
    degree: 'M.Sc Financial Engineering',
    school: 'WorldQuant University',
    place: 'Louisiana, USA',
    period: 'Apr 2026 — Present',
    current: true,
  },
  {
    degree: 'B.Sc Petroleum Engineering',
    school: 'University of Ibadan',
    place: 'Ibadan, Nigeria',
    period: 'Feb 2021 — Feb 2026',
  },
]