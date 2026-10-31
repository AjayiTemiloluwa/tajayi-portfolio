/**
 * Single source of truth — every fact here comes from Temiloluwa's CV
 * and the extracted research documents (_extracted/).
 * Part 1: profile, marquee, the four disciplines.
 */

export const profile = {
  name: 'Temiloluwa Samuel Ajayi',
  firstName: 'Temiloluwa',
  middleName: 'Samuel',
  lastName: 'Ajayi',
  initials: 'TA',
  role: 'Climate Fintech & AI Systems Builder',
  location: 'Lagos, Nigeria',
  email: 'temiloluwaajayi2019@gmail.com',
  phoneDisplay: '+234 905 725 3126',
  phoneHref: 'tel:+2349057253126',
  linkedin: 'https://www.linkedin.com/in/temiloluwa-ajayi-b5b566236/',
  linkedinLabel: 'LinkedIn — Temiloluwa Ajayi',
  github: 'https://github.com/AjayiTemiloluwa',
  githubLabel: 'GitHub — AjayiTemiloluwa',
  cvPath: '/Temiloluwa-Ajayi-CV.pdf',
  availability: 'Open to new opportunities',
  statement:
    'Building a career in sustainable energy and climate fintech — AI systems that make energy operations safer and cleaner, and the financial infrastructure that funds the transition.',
} as const

/** The lens every section is cut through — energy and climate first, AI and capital as the tools. */
export const focusAxes = [
  'Energy',
  'Climate',
  'AI',
  'Finance',
] as const

export const marqueeItems = [
  'Ensemble Learning',
  'Explainable AI',
  'Well-Control Engineering',
  'Drilling Hydraulics',
  'Satellite Remote Sensing',
  'Gas-Flaring Analytics',
  'Fracturing-Fluid Rheology',
  'Random Forest',
  'Python',
  'SQL',
  'Next.js · TypeScript',
  'PostgreSQL · Prisma',
  'Financial Engineering',
  'Tableau',
  'n8n Automation',
] as const

/**
 * The four disciplines — shown in the layout, never said in the copy.
 */
export const pillars = [
  {
    icon: 'cpu',
    title: 'Build',
    body: 'AI and automation systems in daily use — compliance engines and full-stack platforms.',
  },
  {
    icon: 'chart',
    title: 'Model',
    body: 'Machine learning for energy and capital — kick detection, flaring forecasting, fluid design, transition risk.',
  },
  {
    icon: 'cap',
    title: 'Teach',
    body: 'Python and data literacy for learners across four continents.',
  },
  {
    icon: 'users',
    title: 'Lead',
    body: 'Logistics, IT and volunteer teams across energy summits and workshops.',
  },
] as const