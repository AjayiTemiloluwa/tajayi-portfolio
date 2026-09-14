/**
 * Interests — the curiosity shelf: the professional lenses the work is
 * cut through, plus the multifaceted life behind it (cooking,
 * calisthenics, gaming, circuits & cooling, sound engineering).
 * Rendered by /interests.
 */

export type Interest = {
  icon:
    | 'cpu'
    | 'trending-up'
    | 'zap'
    | 'graduation-cap'
    | 'users'
    | 'chef-hat'
    | 'dumbbell'
    | 'gamepad'
    | 'plug'
    | 'audio'
    | 'wind'
  title: string
  blurb: string
}

export const interests: Interest[] = [
  {
    icon: 'cpu',
    title: 'AI & Intelligent Systems',
    blurb: 'Machines that carry real operational weight — ensemble models, deep learning and automation that never forgets a deadline.',
  },
  {
    icon: 'zap',
    title: 'Energy & Sustainability',
    blurb: 'Five years of petroleum engineering, pointed at the transition — well control, flaring analytics and cleaner fluid design.',
  },
  {
    icon: 'trending-up',
    title: 'Financial Markets & Quant',
    blurb: 'Financial engineering at WorldQuant University — pricing, risk and the mathematics of decisions under uncertainty.',
  },
  {
    icon: 'graduation-cap',
    title: 'Teaching & Mentorship',
    blurb: 'Python and data literacy for learners across four continents — knowledge compounds fastest when shared.',
  },
  {
    icon: 'users',
    title: 'Community & Leadership',
    blurb: 'SPE logistics, Krawdwise IT, Junior Achievers Gen-AI workshops — showing up is a metric, too.',
  },
  {
    icon: 'trending-up',
    title: 'Data Storytelling',
    blurb: 'Dashboards and visualizations that make numbers speak — Tableau, Matplotlib and honest reporting.',
  },
  {
    icon: 'chef-hat',
    title: 'Cooking',
    blurb: 'A recipe is just an algorithm with better smells — Nigerian classics, slow experiments, precise heat.',
  },
  {
    icon: 'dumbbell',
    title: 'Calisthenics',
    blurb: 'Bodyweight discipline — progress through consistency, measured one rep at a time.',
  },
  {
    icon: 'gamepad',
    title: 'Gaming',
    blurb: 'Strategy worlds as systems homework — mechanics, economies and the design of fair rules.',
  },
  {
    icon: 'plug',
    title: 'Electrical & Refrigeration',
    blurb: 'Circuits, wiring and cooling — the hardware side of the curiosity that started it all.',
  },
  {
    icon: 'audio',
    title: 'Sound Engineering',
    blurb: 'Signal chains, mixing and live sound — another control problem, and one you can hear settle.',
  },
]
