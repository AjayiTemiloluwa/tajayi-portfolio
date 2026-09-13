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
      'n8n compliance reminder & escalation engine — daily runs, team routing, audit logging.',
      'Full-stack compliance platform (Next.js/TypeScript) — regulatory tracking, litigation, reporting.',
      '11-model PostgreSQL/Prisma schema with migration, backfill and reconciliation.',
    ],
    tags: ['n8n', 'Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'AWS'],
  },
  {
    title: 'Coding Tutor',
    org: 'Tutorszone.ng',
    place: 'Ibadan, Nigeria',
    period: 'May 2025 — Apr 2026',
    bullets: [
      'Python instruction across four continents — 95% certification completion (freeCodeCamp, Coursera).',
      'Hands-on Pandas, NumPy, SQL and Excel projects — reporting templates that lifted accuracy ~35%.',
    ],
    tags: ['Python', 'Pandas', 'NumPy', 'SQL', 'Teaching'],
  },
  {
    title: 'Freelance Data Scientist',
    org: 'Independent',
    place: 'Remote',
    period: 'Dec 2022 — Apr 2026',
    bullets: [
      'Quant + qualitative analysis of the Ukraine–Russia conflict’s impact on African students.',
      'Math × Chemistry correlation study — Python regression, Tableau.',
    ],
    tags: ['Python', 'Excel', 'Tableau', 'Research'],
  },
  {
    title: 'Reservoir Performance Intern',
    org: 'SLB Nigeria Limited',
    place: 'Port Harcourt, Nigeria',
    period: 'Nov 2024 — Apr 2025',
    bullets: [
      'Python biometric attendance prototype — 35% fewer processing delays.',
      'Managed inventory datasets — 20% better data accuracy and decision support.',
    ],
    tags: ['Python', 'Excel', 'Enterprise systems'],
  },
  {
    title: 'Data Analyst',
    org: 'GOLEARN Africa',
    place: 'Lagos, Nigeria',
    period: 'Sep 2023 — Mar 2025',
    bullets: [
      'Automated pipelines and relational databases — 30% better reporting efficiency.',
      'AI-assisted performance tracking — 40% less manual reporting.',
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