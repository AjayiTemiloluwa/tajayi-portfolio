/**
 * The years that made me — life timeline chapters (2021 → Now).
 * Every highlight is traceable to experience.ts / community.ts / resume.ts.
 */

export type Chapter = {
  year: string
  title: string
  body: string
  highlights: readonly string[]
}

export const chapters: Chapter[] = [
  {
    year: '2021',
    title: 'The foundation',
    body: 'Petroleum Engineering begins at the University of Ibadan — five years of pressure, scale and precision start here.',
    highlights: ['B.Sc Petroleum Engineering, UI'],
  },
  {
    year: '2022',
    title: 'First proof',
    body: 'First freelance data science work while the academics catch fire — three awards in one year.',
    highlights: ['Dean\'s List Award', 'Federal Government Scholarship', 'Foursquare National Scholarship', 'Math × Chemistry correlation study'],
  },
  {
    year: '2023',
    title: 'Data at scale',
    body: 'GOLEARN Africa — automated pipelines and relational databases for a real education platform, plus conflict-impact research.',
    highlights: ['Data pipelines (+30% efficiency)', 'Ukraine–Russia impact research', '2× Bank of America Career Day delegate'],
  },
  {
    year: '2024',
    title: 'Into the field',
    body: 'SLB internship in Port Harcourt, leading IT at Krawdwise, volunteering with Junior Achievers — the energy and community years overlap.',
    highlights: ['SLB Reservoir Performance Intern (−35% delays)', 'Krawdwise Head of IT (+30% efficiency)', 'Junior Achievers Gen-AI workshops'],
  },
  {
    year: '2025',
    title: 'The teaching year',
    body: 'Teaching Python across four continents, national fellowships, and leadership across energy and community.',
    highlights: ['Tutorszone — 95% certification rate, 4 continents', 'NHEF Scholar', 'Millennium Fellowship Admissions Committee', 'SPE UI Logistics Lead (−23% costs)', 'Younga Task Teams delegate'],
  },
  {
    year: '2026',
    title: 'The blend continues',
    body: 'Graduation, then straight into building — intelligent automation at Sankore and financial engineering at WorldQuant.',
    highlights: ['B.Sc completed', 'AI & Automation Analyst @ Sankore', 'M.Sc Financial Engineering, WorldQuant University'],
  },
]
