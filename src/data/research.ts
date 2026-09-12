/**
 * Research — areas of inquiry + the two studies, per the CV.
 */

export type Study = {
  id: string
  title: string
  year: string
  field: string
  method: string
  findings: readonly string[]
  stack: readonly string[]
}

export const researchAreas = [
  {
    id: '01',
    title: 'Applied Data Science',
    blurb: 'Regression, visualization and statistical rigor on messy real-world datasets — the method behind every claim.',
  },
  {
    id: '02',
    title: 'Impact & Conflict Analytics',
    blurb: 'Quantifying how global shocks land on real people — the Ukraine–Russia conflict\'s effect on African students.',
  },
  {
    id: '03',
    title: 'Education Analytics',
    blurb: 'Measuring what actually moves learning outcomes — subject-performance correlation and learner engagement data.',
  },
  {
    id: '04',
    title: 'Automation & Decision Systems',
    blurb: 'Systems that decide, not decorate — compliance engines, escalation logic and pipelines that keep reporting honest.',
  },
] as const

export const studies: Study[] = [
  {
    id: 'conflict-impact',
    title: 'Conflict Impact Research: Ukraine–Russia & African Students',
    year: '2023',
    field: 'Impact & Conflict Analytics',
    method:
      'Mixed-methods study combining quantitative analysis (Advanced Excel, Pandas, NumPy) with structured thematic coding of qualitative accounts.',
    findings: [
      'Quantified disruption to African students across funding, mobility and academic continuity during the conflict.',
      'Structured thematic coding turned open-ended accounts into measurable, comparable impact categories.',
      'Findings framed into data-driven insights usable by educators and support organizations.',
    ],
    stack: ['Pandas', 'NumPy', 'Advanced Excel', 'Thematic coding'],
  },
  {
    id: 'math-chemistry',
    title: 'Mathematics × Chemistry Performance Correlation Study',
    year: '2022',
    field: 'Education Analytics',
    method:
      'Correlation and regression analysis of subject performance in Python, with visualization and storytelling in Matplotlib and Tableau.',
    findings: [
      'Measured the strength and direction of the Mathematics–Chemistry performance relationship.',
      'Regression outputs translated into actionable recommendations for learners and instructors.',
      'Dashboards made the statistical story legible to non-technical readers.',
    ],
    stack: ['Python regression', 'Matplotlib', 'Tableau'],
  },
]
