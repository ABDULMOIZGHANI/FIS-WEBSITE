// All copy below is taken from "FIS Company Profile.doc" (text + text inside its images).
// Do not add facts, figures, clients or claims that are not in the source document.

export const company = {
  name: 'M/S Facilities & Industrial Services',
  short: 'FIS',
  docTitle: 'Company Profile',
  line: 'Surface Preparation & Industrial Coating',
  tagline: 'Quality Coating for a Stronger Tomorrow',
  ntn: 'B459426-3',
  heroTags: ['Grit Blasting', 'Painting', 'Coating Inspection', 'Marine & Industrial Coating Solutions'],
  footerScope: ['Surface Preparation', 'Industrial Coating', 'Coating Inspection/ Certified Inspector'],
}

// From the "About Us" panel in the document's cover artwork.
export const aboutUs =
  'M/S Facilities & Industrial Services is a professional and reliable service provider, specializing in surface preparation, marine and industrial painting, coating inspection and quality control. With a commitment to excellence, we deliver high-quality solutions for ships, industrial plants, oil & gas facilities and heavy industries.'

export const overview = [
  'M/S Facilities & Industrial Services is focused on surface preparation and industrial coating services for marine and industrial applications. The company’s stated service areas include abrasive blasting, painting activity, coating inspection and quality control.',
  'Our work approach gives attention to the key stages of coating work: preparation of the surface, application of the specified coating system, and inspection of the completed work. Activities are to be carried out in accordance with the applicable project specification, approved procedures and client requirements.',
]

export const keyStages = ['Preparation of the surface', 'Application of the specified coating system', 'Inspection of the completed work']

export const services = [
  {
    no: '01',
    title: 'Grit Blasting & Surface Preparation',
    label: 'Grit Blasting (Abrasive Blasting)',
    text: 'Abrasive blasting and surface-preparation activities to prepare steel surfaces for protective coating. The required cleanliness grade and surface profile are determined by the project specification.',
    img: 'blasting',
  },
  {
    no: '02',
    title: 'Marine & Industrial Painting',
    label: 'Painting Activity',
    text: 'Painting activities for marine and industrial coating applications, using the coating system and application requirements approved for the project.',
    img: 'painting',
  },
  {
    no: '03',
    title: 'Coating Inspection & Quality Control',
    label: 'Coating Inspection & Quality Control',
    text: 'Coating inspection support and quality checks during the work process, with observations and measurements recorded as required by the approved inspection plan.',
    img: 'inspection',
  },
  {
    no: '04',
    title: 'Marine & Industrial Coating Solutions',
    label: 'Marine & Industrial Coating Solutions',
    text: 'Coating-related service support for marine and industrial assets, coordinated to suit the work scope, site conditions and client instructions.',
    img: 'hull',
  },
]

// From the "About Us" panel in the doc artwork.
export const sectors = ['Ships', 'Industrial plants', 'Oil & gas facilities', 'Heavy industries']

export const environments = [
  { title: 'Storage Tanks', img: 'tanks' },
  { title: 'Industrial / Refinery', img: 'refinery' },
  { title: 'Turbines', img: 'turbine' },
]

export const methodology = [
  { title: 'Scope & specification review', text: 'Review the work scope, coating specification, surface condition and relevant client instructions.' },
  { title: 'Surface preparation', text: 'Perform the specified surface-preparation activity and confirm acceptance criteria before coating.' },
  { title: 'Coating application', text: 'Carry out painting activity in line with the approved coating system, product guidance and site controls.' },
  { title: 'Inspection & quality checks', text: 'Complete required visual inspections and coating measurements in accordance with project requirements.' },
  { title: 'Documentation & coordination', text: 'Communicate work status, inspection observations and any non-conformities requiring review.' },
]

export const quality = [
  'Focus on appropriate surface preparation and coating workmanship.',
  'Follow approved project specifications, procedures and manufacturer recommendations.',
  'Use suitable personal protective equipment and observe site safety requirements.',
  'Coordinate inspection activities and communicate findings clearly to the relevant team.',
]

// ---------------------------------------------------------------------------
// Vision, mission & values — written from the profile doc's wording and
// approved by the client (Nov 2026).
export const vision =
  'To be a trusted name for surface preparation and protective coating work on marine and industrial assets — known for careful preparation, specified coating systems and honest inspection.'

export const mission =
  'To prepare, coat and inspect every surface in line with the approved project specification, procedures and manufacturer recommendations, while working safely and keeping the client informed at every stage.'

export const values = [
  { title: 'Workmanship', text: 'Focus on appropriate surface preparation and coating workmanship.' },
  { title: 'Specification first', text: 'Follow approved project specifications, procedures and manufacturer recommendations.' },
  { title: 'Safety on site', text: 'Use suitable personal protective equipment and observe site safety requirements.' },
  { title: 'Clear coordination', text: 'Coordinate inspection activities and communicate findings clearly to the relevant team.' },
]

// ---------------------------------------------------------------------------
// From the owner-supplied documents: FROSIO certificate + Uzair Ali's CV.
// Personal data in the CV (date of birth, CNIC, father's name, home address,
// marital status) is deliberately NOT published.
export const certification = {
  body: 'FROSIO',
  title: 'FROSIO Certified Surface Treatment Inspector — Level III',
  number: '8171',
  holder: 'Uzair Ali',
  firstIssued: '19 Jun 2014',
  validFrom: '19 Jun 2024',
  expires: '19 Jun 2029',
  note: 'Equivalent to NACE Level II (as stated in the holder’s CV).',
}

export const surfaceStandards = {
  title: 'ISO 8501-1:2007 / SIS 05 5900 cleaning standards',
  grades: [
    ['St 2', 'Thorough hand and power tool cleaning', 'SSPC SP-2'],
    ['St 3', 'Very thorough hand and power tool cleaning', 'SSPC SP-3'],
    ['Sa 1', 'Light blast-cleaning', 'SSPC SP-7 & NACE-4'],
    ['Sa 2', 'Thorough blast-cleaning', 'SSPC SP-6 & NACE-3'],
    ['Sa 2½', 'Very thorough blast-cleaning', 'SSPC SP-10 & NACE-2'],
    ['Sa 3', 'Blast-cleaning to visually clean steel', 'SSPC SP-5 & NACE-1'],
    ['HB 2', 'Thorough hydro blast cleaning', ''],
    ['HB 2½', 'Very thorough hydro blast cleaning', ''],
  ],
  rust: 'Rust grades A, B, C, D and flash rust grades L, M and H',
}

export const prepMethods = ['Hand & power tool cleaning', 'Abrasive blasting', 'Jet washing / hydro blasting']
export const applicationMethods = ['Brush & roller painting', 'Conventional spray painting', 'Airless spray painting']

export const coatingBrands = ['International', 'Carboline', 'Sigma', 'Hempel']

export const qcInstruments = [
  'Coating thickness gauge',
  'Surface comparator',
  'Surface profile comparator & magnifier',
  'Grit / shot surface comparators',
  'Dew point meter',
  'Wet film wheels',
  'WFT comb gauge',
  'Holiday detector (pinholes in dry paint)',
  'Bresle kit for chlorides test',
  'Adhesion tester — pull-off, cross cut & X-cut tests',
  'Pressure-sensitive dust test tape',
]

// Equipment photos supplied by the client (Nov 2026). Captions describe what
// is shown; no models or quantities are claimed.
export const equipment = [
  {
    group: 'Surface preparation',
    items: [
      { title: 'Abrasive blasting pot', text: 'Pressure blast pot with operator blasting hood, used for grit blasting of steel surfaces.', img: 'eqBlastPot' },
      { title: 'Portable air compressor', text: 'Trailer-mounted diesel air compressor supplying air for blasting work on site.', img: 'eqCompressor', fit: 'contain' },
    ],
  },
  {
    group: 'Inspection & QC instruments',
    items: [
      { title: 'Coating thickness gauge', text: 'Measures dry film thickness of the applied coating.', img: 'eqThickness' },
      { title: 'Dew point meter', text: 'Checks surface temperature, air temperature, humidity and dew point before coating.', img: 'eqDewPointSite' },
      { title: 'Dew point meter — readings', text: 'Relative humidity, surface, air and dew-point temperatures shown together.', img: 'eqDewPointDisplay' },
      { title: 'High-voltage holiday detector', text: 'Finds pinholes and holidays in dry paint films.', img: 'eqHolidayHv', fit: 'contain' },
      { title: 'Low-voltage pinhole detector', text: 'Wet-sponge detector for pinholes in thinner coatings.', img: 'eqHolidayLv', fit: 'contain' },
    ],
  },
]

export const qaDuties = [
  'Ensure the correct application of the Project Quality Plan in site activities.',
  'Ensure the supervision and coordination of quality control activities.',
  'Review Quality Control Plans and ensure tests, controls and inspections are carried out to the QC Plans / Inspection Test Plans, with personnel having access to all required project documentation.',
  'Ensure assessments and recordings of inspection, control and test results.',
  'Check the documents certifying tests, controls and inspections, and ensure their orderly collection and management.',
  'Check procedures and equipment for tests, controls and inspections, and agree applicable operating procedures with the organisation in charge of the works.',
  'Support the systematic collection of lessons learned on each site.',
  'Prepare the QA/QC discipline dossier for final handover to the client, and verify the database / spreadsheet for inspection and test report tracking.',
  'Provide specialist support to the Quality Control Manager in relations with the client and responsible authorities.',
  'Liaise with the client on any project-related QC issue.',
]

export const team = [
  {
    id: 'umair-ali',
    name: 'Umair Ali',
    role: 'Chief Executive Officer',
    short: 'CEO',
    phone: '0332-2882236',
    tel: '+923322882236',
    photo: 'umairAli',
    summary: 'Leads M/S Facilities & Industrial Services and is the first point of contact for project enquiries and service requirements.',
  },
  {
    id: 'uzair-ali',
    name: 'Uzair Ali',
    role: 'Technical Advisor',
    short: 'Technical Advisor',
    phone: '0313-6616601',
    tel: '+923136616601',
    whatsapp: '923136616601',
    photo: 'uzairAli',
    credential: 'FROSIO Inspector Level III · Cert. No. 8171',
    summary:
      'FROSIO-certified Level III surface treatment inspector with 16 years as an inspector of paint work in a hull-engineering paint workshop, specialising in coating and paint.',
    experience: [
      '16 years as Inspector of the paint workshop in Hull Engineering Department (Specialist in Coating/Paint), Pakistan Navy Dockyard, Karachi.',
      'One-week quality inspection as third-party verification on new building of ships at Karachi Shipyard & Engineering.',
      'One-month inspection of an LSP wind turbine at the Gharo site, Karachi.',
      'Coating inspection on the internal tank lining project at Lotte Chemical — 3rd party from SGS Pakistan (freelance).',
    ],
    navalScope: {
      title: 'PN ships / craft and submarines — Agosta 90B & 70B project, MESMA',
      items: [
        'Underwater hull',
        'Pipeline coating systems',
        'Treatment of galvanised pipes',
        'Machinery spaces & bilges',
        'Fuel oil, ballast, freshwater and feed water tanks',
        'Void spaces & cofferdams',
        'Cascade bends and modules',
        'Flight deck',
        'Lining project',
      ],
    },
    qualifications: [
      ['Master of Science (MSc) in Petroleum Technology', 'University of Karachi', '2013'],
      ['Bachelor of Technology (B-Tech) in Mechanical', 'NED University of Karachi', '2010'],
      ['Diploma of Associate Engineering in Ship Construction', 'Pakistan Navy Polytechnic Institute, Karachi', '2008'],
    ],
    courses: [
      'FROSIO certificate course (Norwegian standard), Denmark',
      'Inspection of surface preparation',
      'Basic Life Support & First Aid — BMC PN Dockyard',
      'Fire Fighting Course — PN Central Fire Brigade, PN Dockyard',
      'QC inspection course from DCN (French Navy)',
    ],
    languages: 'English & Urdu',
  },
]

export const contact = {
  intro: 'For project enquiries and service requirements, please contact:',
  email: 'fisblasting@gmail.com',
  people: [
    { role: 'CEO', name: 'Umair Ali', phone: '0332-2882236', tel: '+923322882236' },
    { role: 'Technical Advisor', name: 'Uzair Ali', phone: '0313-6616601', tel: '+923136616601' },
  ],
}
