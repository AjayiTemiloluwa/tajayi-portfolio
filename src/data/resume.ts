/**
 * Single source of truth — every fact here comes from Temiloluwa's CV.
 * Part 1: profile, hero stats, marquee, balance pillars.
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
  cvPath: '/Temiloluwa-Ajayi-CV.pdf',
  availability: 'Open to new opportunities',
  statement:
    'I build intelligent systems by day and grow people by design — a deliberately balanced life across engineering, finance, education and community.',
} as const

export const heroStats = [
  { value: '5+', label: 'industries & teams shaped' },
  { value: '95%', label: 'learner certification rate' },
  { value: '40%', label: 'manual reporting eliminated' },
  { value: '4', label: 'continents taught' },
] as const

export const marqueeItems = [
  'Python',
  'Machine Learning',
  'Deep Learning & Computer Vision',
  'SQL',
  'Next.js · TypeScript',
  'PostgreSQL · Prisma',
  'n8n Automation',
  'Tableau',
  'R Programming',
  'Financial Engineering',
  'Process Optimization',
  'Dashboard Design',
  'Project Management',
] as const

export const balancePillars = [
  {
    icon: 'cpu',
    title: 'Build',
    body: 'AI & automation systems that carry real operational weight — from compliance engines to full-stack platforms.',
  },
  {
    icon: 'chart',
    title: 'Analyze',
    body: 'Data pipelines, models and dashboards that turn noise into decisions across energy, finance and education.',
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