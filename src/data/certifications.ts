/**
 * Certifications & recognition — every credential below is a real document
 * from the certification archive (public/certificates serves the PDFs;
 * Google/Coursera course certificates verify on coursera.org).
 */

export type CredentialGroup =
  | 'Data Analytics — Google'
  | 'Advanced Analytics — Google'
  | 'Data & Programming'
  | 'Leadership & Programs'
  | 'Industry & Energy'

export type Certification = {
  id: string
  title: string
  issuer: string
  date: string
  group: CredentialGroup
  /** Third-party verification link, when the issuer hosts one. */
  verify?: string
  /** Self-hosted PDF of the certificate, served from /certificates. */
  file?: string
  featured?: boolean
}

export const certifications: Certification[] = [
  {
    id: 'google-data-analytics',
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google · Coursera',
    date: 'Apr 2023 · 8 courses',
    group: 'Data Analytics — Google',
    verify: 'https://coursera.org/verify/professional-cert/7BUX4VLXLJ2F',
    file: '/certificates/Google-Data-Analytics-Professional-Certificate.pdf',
    featured: true,
  },
  {
    id: 'gda-foundations',
    title: 'Foundations: Data, Data, Everywhere',
    issuer: 'Google · Coursera',
    date: 'Mar 2023',
    group: 'Data Analytics — Google',
    verify: 'https://coursera.org/verify/TTQKF2VWMN3Z',
  },
  {
    id: 'gda-ask-questions',
    title: 'Ask Questions to Make Data-Driven Decisions',
    issuer: 'Google · Coursera',
    date: 'Mar 2023',
    group: 'Data Analytics — Google',
    verify: 'https://coursera.org/verify/6AUQUTSF7KBC',
  },
  {
    id: 'gda-prepare-data',
    title: 'Prepare Data for Exploration',
    issuer: 'Google · Coursera',
    date: 'Apr 2023',
    group: 'Data Analytics — Google',
    verify: 'https://coursera.org/verify/LE7YJRJVVGX5',
  },
  {
    id: 'gda-analyze-data',
    title: 'Analyze Data to Answer Questions',
    issuer: 'Google · Coursera',
    date: 'Apr 2023',
    group: 'Data Analytics — Google',
    verify: 'https://coursera.org/verify/4SNG83RVZV9P',
  },
  {
    id: 'gda-share-data',
    title: 'Share Data Through the Art of Visualization',
    issuer: 'Google · Coursera',
    date: 'Apr 2023',
    group: 'Data Analytics — Google',
    verify: 'https://coursera.org/verify/BENHGGCJGGXA',
  },
  {
    id: 'gda-r-programming',
    title: 'Data Analysis with R Programming',
    issuer: 'Google · Coursera',
    date: 'Apr 2023',
    group: 'Data Analytics — Google',
    verify: 'https://coursera.org/verify/QPWAERTBWGMS',
  },
  {
    id: 'gda-capstone',
    title: 'Google Data Analytics Capstone: Complete a Case Study',
    issuer: 'Google · Coursera',
    date: 'Apr 2023',
    group: 'Data Analytics — Google',
    verify: 'https://coursera.org/verify/QA98GGWKGPDP',
  },
  {
    id: 'gada-beyond-numbers',
    title: 'Go Beyond the Numbers: Translate Data into Insights',
    issuer: 'Google · Coursera',
    date: 'Jan 2024',
    group: 'Advanced Analytics — Google',
    verify: 'https://coursera.org/verify/E8Y9BBTF96GA',
  },
  {
    id: 'gada-statistics',
    title: 'The Power of Statistics',
    issuer: 'Google · Coursera',
    date: 'Jan 2024',
    group: 'Advanced Analytics — Google',
    verify: 'https://coursera.org/verify/BA2HS3ZRNCRZ',
  },
  {
    id: 'gada-regression',
    title: 'Regression Analysis: Simplify Complex Data Relationships',
    issuer: 'Google · Coursera',
    date: 'Dec 2024',
    group: 'Advanced Analytics — Google',
    verify: 'https://coursera.org/verify/J4YBZ85IA3AT',
  },
  {
    id: 'gada-python',
    title: 'Get Started with Python',
    issuer: 'Google · Coursera',
    date: 'Sep 2023',
    group: 'Advanced Analytics — Google',
    verify: 'https://coursera.org/verify/3HH9NLEQALU2',
  },
]
export const credentialGroups: { label: CredentialGroup; blurb: string }[] = [
  {
    label: 'Data Analytics — Google',
    blurb: 'The full 8-course professional certificate, course by course — SQL, Tableau, R, case study.',
  },
  {
    label: 'Advanced Analytics — Google',
    blurb: 'The follow-on track — statistics, regression and Python for deeper modeling.',
  },
  {
    label: 'Data & Programming',
    blurb: 'Hands-on Python and analysis practice on Dataquest, plus IBM SkillsBuild.',
  },
  {
    label: 'Leadership & Programs',
    blurb: 'Project management, the Aspire Leaders Program and Google Research recognition.',
  },
  {
    label: 'Industry & Energy',
    blurb: 'Energy-sector conferences and engineering AI — where the two worlds meet.',
  },
]

/** Programs, industry and IBM — the non-Google certificates. */
const programCerts: Certification[] = [
  {
    id: 'dq-python',
    title: 'Python Introduction',
    issuer: 'Dataquest',
    date: 'Aug 2023',
    group: 'Data & Programming',
    verify: 'https://app.dataquest.io/verify_cert/46VJA3V6SI5VKYBSHC7S/',
    file: '/certificates/Dataquest-Python-Introduction.pdf',
  },
  {
    id: 'dq-data-analysis',
    title: 'Data Analysis and Visualization',
    issuer: 'Dataquest',
    date: 'Jan 2024',
    group: 'Data & Programming',
    verify: 'https://app.dataquest.io/verify_cert/D26QIFU08Q1D0KGG9G35/',
    file: '/certificates/Dataquest-Data-Analysis-Visualization.pdf',
  },
  {
    id: 'ibm-itexperience',
    title: 'ITExperience Orientation 2025',
    issuer: 'IBM SkillsBuild',
    date: 'Sep 2025',
    group: 'Data & Programming',
    file: '/certificates/IBM-SkillsBuild-ITExperience-Orientation-2025.pdf',
  },
  {
    id: 'google-pm-foundations',
    title: 'Foundations of Project Management',
    issuer: 'Google · Coursera',
    date: 'Nov 2024',
    group: 'Leadership & Programs',
    verify: 'https://coursera.org/verify/UZP2TJAWX442',
  },
  {
    id: 'aspire-leaders',
    title: 'Aspire Leaders Program — 30 hours of leadership coursework',
    issuer: 'Aspire Institute (Harvard founders)',
    date: 'Apr 2024',
    group: 'Leadership & Programs',
    file: '/certificates/Aspire-Leaders-Program-2024.pdf',
  },
  {
    id: 'nhef-scholars',
    title: 'NHEF Scholars Program — Certificate of Recognition',
    issuer: 'Nigeria Higher Education Foundation',
    date: '2025',
    group: 'Leadership & Programs',
  },
  {
    id: 'google-explorecsr',
    title: '#exploreCSR Award — HCI Capacity Building Workshop',
    issuer: 'Google Research · University of Ibadan',
    date: 'Jan 2024',
    group: 'Leadership & Programs',
    file: '/certificates/Google-Research-exploreCSR-Recognition-2024.pdf',
  },
  {
    id: 'eit-ai-webinar',
    title: 'Transforming Engineering With Artificial Intelligence',
    issuer: 'Engineering Institute of Technology (EIT)',
    date: 'Aug 2023',
    group: 'Industry & Energy',
    file: '/certificates/EIT-Transforming-Engineering-With-AI-2023.pdf',
  },
  {
    id: 'e3-conference',
    title: 'Earth, Energy & Environment (E3) Student Conference — Attendance',
    issuer: 'Marietta College · PioPetro · University of Houston',
    date: 'Nov 2023',
    group: 'Industry & Energy',
    file: '/certificates/E3-Student-Conference-Attendance-2023.pdf',
  },
]

/** The complete ledger, Google courses first. */
export const allCertifications: Certification[] = [...certifications, ...programCerts]
/**
 * Recognition — physical awards, photographed. Proof with a frame on it.
 */
export type Recognition = {
  id: string
  title: string
  issuer: string
  date: string
  note: string
  image: string
  w: number
  h: number
  alt: string
}

export const recognition: Recognition[] = [
  {
    id: 'spe-excellence',
    title: 'Award of Excellent Service — Co-Logistics Lead',
    issuer: 'SPE University of Ibadan',
    date: 'Dec 2025',
    note: 'For immense contribution and excellent service to the society.',
    image: '/images/awards/spe-excellence-award.jpg',
    w: 1400,
    h: 1050,
    alt: 'SPE University of Ibadan Award of Excellent Service presented to Temiloluwa Ajayi',
  },
  {
    id: 'nhef-recognition',
    title: 'Scholars Program — Certificate of Recognition',
    issuer: 'Nigeria Higher Education Foundation',
    date: '2025',
    note: 'Recognizing achievement and participation in the NHEF Scholars Program.',
    image: '/images/awards/nhef-scholars-recognition.jpg',
    w: 1400,
    h: 1050,
    alt: 'Nigeria Higher Education Foundation Scholars Program certificate of recognition',
  },
]

/**
 * The single line — digital foundations on one strip. What the work
 * stands on, readable in five seconds.
 */
export const credentialsStrip = [
  'Google Data Analytics Certified',
  'Aspire Leaders Program ’24',
  'SPE Service Awardee',
  'NHEF Scholar',
  'WorldQuant M.Sc (in progress)',
] as const