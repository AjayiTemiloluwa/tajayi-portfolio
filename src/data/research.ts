/**
 * Research — the manuscript ledger + the road to grad school.
 * Every study below is a real document extracted into _extracted/.
 */

export type Study = {
  id: string
  title: string
  year: string
  venue: string
  kind: string
  field: string
  method: string
  findings: readonly string[]
  stack: readonly string[]
  /** Full manuscript — served from /downloads for public reading. */
  file: string
  fileKind: 'PDF' | 'DOCX'
}

export const researchAreas = [
  {
    id: '01',
    title: 'Drilling Automation & Well-Control AI',
    blurb:
      'Ensemble learning on drilling hydraulics — catching kicks and integrity risks while they are still inches, not blowouts.',
  },
  {
    id: '02',
    title: 'AI for Sustainable Energy & Climate',
    blurb:
      'Satellite-driven gas-flaring analytics and policy coherence — putting emissions where decisions can see them.',
  },
  {
    id: '03',
    title: 'Data-Driven Fluids & Materials',
    blurb:
      'Machine-learning-guided formulation — clay stabilization and rheology without the salt bill.',
  },
  {
    id: '04',
    title: 'Finance × Energy',
    blurb:
      'Financial engineering for the transition — risk, pricing and capital allocation for sustainable operations.',
  },
] as const

export const studies: Study[] = [
  {
    id: 'kick-ensemble',
    title:
      'Ensemble Machine Learning for Early Detection of Well Kicks and Integrity Risk Indicators',
    year: '2026',
    venue: 'SPE NAICE — STSE 2026',
    kind: 'In progress',
    field: 'Drilling Automation & Well-Control AI',
    method:
      'Explainable ensemble ML on drilling-hydraulics time series — mud flow rates, standpipe pressure, pump strokes, ROP and depth — fused with physics-based well-control calculations for influx-volume estimation.',
    findings: [
      '90–94% detection accuracy across Niger Delta wells, with moderate and large influx events identified most reliably.',
      'Sub-second latency — built as a real-time decision-support tool, not an after-action report.',
      'Explainability analysis flags persistent flow imbalance and abnormal pressure deviations as the dominant early indicators.',
    ],
    stack: ['Ensemble ML', 'Explainable AI', 'Drilling Hydraulics', 'Feature Engineering', 'Well Control'],
    file: '/downloads/TSA-2026-SPE-NAICE-Ensemble-ML-Well-Kick-Detection.pdf',
    fileKind: 'PDF',
  },
  {
    id: 'kick-anomaly',
    title:
      'Well Kick Detection and Quantification Using Real-Time Anomaly Detection',
    year: '2025',
    venue: 'SPE SAASC 2025',
    kind: 'In progress',
    field: 'Drilling Automation & Well-Control AI',
    method:
      'Deep-learning anomaly detection fused with classical well-control calculations — real-time drilling data streams, rigorous cleaning and feature-engineering pipelines, and ensemble learning across predictive models.',
    findings: [
      'Prompt alerts plus accurate kick-volume estimates — turning detection into quantified, actionable well control.',
      'Ensemble strategy combines deep architectures and classical models for robustness across drilling phases.',
    ],
    stack: ['Deep Learning', 'Anomaly Detection', 'Ensemble Learning', 'Real-Time Streams', 'Well Control'],
    file: '/downloads/TSA-2025-SPE-SAASC-Well-Kick-Detection-Quantification.pdf',
    fileKind: 'PDF',
  },
  {
    id: 'clay-stabilization',
    title:
      'Rheology and Clay Stabilization Performance of Selected Inorganic Salts and Amino Acids in Water-Based Hydraulic Fracturing Fluids with Machine Learning for Predictive Performance Optimization',
    year: '2026',
    venue: 'SPE NAICE — STSE 2026 · B.Sc thesis',
    kind: 'In progress',
    field: 'Data-Driven Fluids & Materials',
    method:
      'Ten formulated fluid systems characterized by rotational viscometry and 24-hour bentonite swelling tests — multiple linear regression and random forest models predicting swelling and rheology from fluid composition.',
    findings: [
      'Hybrid amino-acid–salt systems beat conventional KCl fluids on both rheology and inhibition (ANOVA, p < 0.05).',
      'Yield point correlates with proppant-carrying capacity at r = 0.894 — fluid structure is proppant transport.',
      'Random forest captured the nonlinear additive synergy, enabling formulation optimization without high salt loads.',
    ],
    stack: ['Rheology Lab Work', 'ANOVA', 'Random Forest', 'Linear Regression', 'Fluid Design'],
    file: '/downloads/TSA-2026-SPE-NAICE-Clay-Stabilization-Rheology-ML.docx',
    fileKind: 'DOCX',
  },
  {
    id: 'gas-flaring',
    title:
      'AI & Big Data for Sustainable Gas-Flaring Management in Nigeria',
    year: '2024',
    venue: 'STSE 2024',
    kind: 'In progress',
    field: 'AI for Sustainable Energy & Climate',
    method:
      'Machine learning on multi-satellite flare data — AVHRR, Landsat, MODIS and Sentinel-3 SLSTR — with oil-production rates, economic indicators and a multi-level governance and policy-coherence framework.',
    findings: [
      'Quantified the environmental and economic toll of flaring — and the communities it lands on hardest.',
      'ML models to predict and prevent flaring incidents for proactive production optimization.',
      'Policy audit against Nigeria’s INDC and National Policy on Climate Change — analytics with an environmental-justice spine.',
    ],
    stack: ['Satellite Remote Sensing', 'Machine Learning', 'Big-Data Analytics', 'Policy Analysis'],
    file: '/downloads/TSA-2024-STSE-AI-BigData-Gas-Flaring-Management.pdf',
    fileKind: 'PDF',
  },
]

/**
 * The road to grad school — where the ledger leads.
 */
export const gradPath = {
  current: {
    label: 'M.Sc Financial Engineering — WorldQuant University',
    detail: 'In progress — pricing, risk and the mathematics of decisions under uncertainty.',
  },
  target: {
    label: 'PhD / research track — AI for energy systems',
    detail: 'Machine learning for drilling safety, emissions intelligence and sustainable operations.',
  },
  statement:
    'The energy problem is global — Lagos, Houston, Doha, Aberdeen. Next: a lab that ships field-ready AI.',
} as const
