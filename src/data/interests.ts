/**
 * Interests — what drives the work, plus the toolkit (skills live in
 * community.ts and are rendered by /interests too).
 */

export type Interest = {
  icon: 'cpu' | 'trending-up' | 'zap' | 'graduation-cap' | 'users' | 'bar-chart-3'
  title: string
  blurb: string
}

export const interests: Interest[] = [
  {
    icon: 'cpu',
    title: 'AI & Intelligent Systems',
    blurb: 'Machines that carry real operational weight — deep learning, computer vision and automation that never forgets a deadline.',
  },
  {
    icon: 'trending-up',
    title: 'Financial Markets & Quant',
    blurb: 'Financial engineering at WorldQuant University — pricing, risk and the mathematics of decisions under uncertainty.',
  },
  {
    icon: 'zap',
    title: 'Energy',
    blurb: 'Five years of petroleum engineering — pressure, scale and precision, from reservoir performance to energy & climate events.',
  },
  {
    icon: 'graduation-cap',
    title: 'Teaching & Mentorship',
    blurb: 'Python and data literacy for K–12 and adult learners across four continents — knowledge compounds fastest when shared.',
  },
  {
    icon: 'users',
    title: 'Community & Leadership',
    blurb: 'SPE logistics, Krawdwise IT, Junior Achievers Gen-AI workshops — showing up is a metric, too.',
  },
  {
    icon: 'bar-chart-3',
    title: 'Data Storytelling',
    blurb: 'Dashboards and visualizations that make numbers speak — Tableau, Matplotlib and honest reporting.',
  },
]
