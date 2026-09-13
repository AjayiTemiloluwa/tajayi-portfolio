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
  role: 'AI & Automation Analyst',
  location: 'Yaba, Lagos, Nigeria',
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
    'Petroleum engineer by training, AI builder by obsession — machine learning for safe, sustainable energy.',
} as const

/** The lens every section is cut through. */
export const focusAxes = [
  'AI',
  'Energy',
  'Sustainability',
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
    body: 'AI & automation systems that carry real operational weight — from compliance engines to full-stack platforms.',
  },
  {
    icon: 'chart',
    title: 'Model',
    body: 'Machine learning for energy: kick detection, gas-flaring forecasting and data-driven fracturing-fluid design.',
  },
  {
    icon: 'cap',
    title: 'Teach',
    body: 'Python and data literacy for K–12 and adult learners across Africa, Asia, Europe and North America.',
  },
  {
    icon: 'users',
    title: 'Lead',
    body: 'Logistics, IT and volunteer teams — from energy summits to Gen-AI workshops — with data behind every call.',
  },
] as const