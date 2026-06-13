// ============================================================================
// ENGLISH DICTIONARY
// ============================================================================
// All user-facing strings live here. Components never contain copy directly.
// ============================================================================

const en = {
  // Hero
  hero: {
    office: 'for County\nCommissioner',
  },

  // About
  about: {
    photoAlt: 'Nabil Zaghloul',
    paragraphs: [
      "Hi, I've lived in District 2 for more than 30 years and spent over 32 inside Multnomah County government. I started in the Department of Community Justice, managing parole, probation, and domestic violence caseloads. After about a decade, I moved to the Health Department, where I managed medical and behavioral health programs. I'm now with the Department of County Human Services, where I work with a great team of more than 60 people across housing stabilization, mental health, addiction services, eviction prevention, and youth services programs. I hold a degree in literature and a law degree with a specialization in public administration.",
      "During my career I've built programs like the Economic Justice and Recovery Program and Bienestar Youth Services from the ground up.",
    ],
    statsLabel: 'A few things I\'m proud of:',
    stats: [
      {
        number: '25,000',
        label: 'families kept housed',
        description: 'Since 2012, we\'ve helped 25,000 families stay in their homes through the Economic Justice and Recovery Program, court eviction prevention, housing support services, and state emergency housing assistance. The Economic Justice and Recovery Program alone served 2,800 families in its first year.',
        href: '/issues/homelessness',
      },
      {
        number: '90%',
        label: 'housing retention rate',
        description: 'Across all of Bienestar\'s housing programs, we survey every family at 3, 6, 9, and 12 months after they receive support. At the one-year mark, 90% are still in their homes.',
        href: '/issues/homelessness',
      },
      {
        number: '350',
        label: 'families rehoused',
        description: 'Over the last three years, we\'ve moved 350 families, including their children, from hotels, shelters, and the street into their own homes.',
        href: '/issues/homelessness',
      },
      {
        number: '600+',
        label: 'youth served',
        description: 'Since 2018, Bienestar Youth Services in Cully has hosted weekly workshops led by teachers and professionals in music, art, robotics, aviation, mentoring, and tutoring.',
        href: '/issues/public-safety',
      },
      {
        number: '1,800',
        label: 'seniors served',
        description: 'Over the last ten years through Bienestar, we\'ve provided 1,800 seniors with food assistance, rental support, disability services, legal aid, and reading groups.',
      },
      {
        number: '3,200+',
        label: 'immigrants and refugees assisted',
        description: 'Over the last ten years through Bienestar, we\'ve assisted 3,200 immigrants and refugees with housing support, food resources, legal clinics, ESL classes, and connection to long-term stability programs.',
      },
      {
        number: '$200M',
        label: 'in direct client services managed',
        description: 'Over 32 years, I\'ve managed more than $200 million in county, city, state, and federal funding across three departments for direct client services.',
      },
      {
        number: '20,000+',
        label: 'families provided with food',
        description: 'Over the last ten years through Bienestar, we\'ve delivered and distributed food to more than 20,000 families.',
      },
    ],
  },

  // Labor
  labor: {
    intro: "I've spent my career on both sides of the table, first as a union member and later as a county manager. I understand the challenges employees face because I have lived them.",
    heading: 'Investing in Workers, Improving Services',
    pillars: [
      {
        title: 'Compensation',
        body: 'County wages should keep up with the cost of living in Portland. The people delivering services deserve compensation that reflects the demands of the work.',
      },
      {
        title: 'Leave',
        body: "County employees shouldn't have to choose between caring for their families and financial stability. Parental leave and sick time policies should reflect the demands of the work.",
      },
      {
        title: 'Voice',
        body: 'Workers should be part of decisions about how technology is implemented, how services are restructured, and how the budget is set.',
      },
    ],
  },

  // Issues — Educational intro + heading + framework + teasers
  issues: {
    question: 'What does a Multnomah County commissioner do?',
    questionHref: '/issues/county-commissioner',
    answer: 'They vote on a $4 billion annual budget covering homeless services, behavioral health, public safety, and eight other county departments serving nearly 800,000 residents.',
    heading: 'Issues',
    leadIn: "",
    leadInBody: "Homelessness, behavioral health, and public safety are the issues residents in Multnomah County raise most. The county spends nearly a billion dollars on them every year, and when outcomes are measured, the people doing the work get the backing they need.",
    framework: [],
    items: [
      {
        title: 'Homelessness',
        body: "The county spends $310 million a year on homelessness. People are becoming homeless faster than they're being housed.",
        href: '/issues/homelessness',
      },
      {
        title: 'Behavioral health',
        body: "The county's behavioral health system handles short-term care well. For people dealing with addiction, mental illness, and housing instability at the same time, there's almost no long-term help.",
        href: '/issues/behavioral-health',
      },
      {
        title: 'Public safety',
        body: "For a restaurant owner in Cully, public safety means people camping outside her door and breaking into cars. For a mother in Northeast Portland, it means whether her kids are safe walking to school.",
        href: '/issues/public-safety',
      },
    ],
    keepReading: 'Keep reading',
  },

  // Endorsements
  endorsements: [
    {
      id: 'tom-potter',
      name: 'Tom Potter',
      title: 'Former Chief of Police and Mayor of Portland',
      quote: 'I am honored to endorse Nabil. He will be a strong voice on the Multnomah County Commission.',
      imageSrc: '/endorsements/tom-potter.png',
    },
    {
      id: 'nafisa-fai',
      name: 'Nafisa Fai',
      title: 'Washington County Commissioner',
      quote: 'Multnomah County needs a commissioner who has done the work, not just studied it. Nabil has done the work.',
      imageSrc: '/endorsements/nafisa-fai.jpeg',
    },
    {
      id: 'ernesto-fonseca',
      name: 'Dr. Ernesto Fonseca',
      title: 'CEO, Hacienda CDC',
      quote: 'Nabil has supported Black, Asian, White, Latino, and Native American working class communities for more than 32 years through housing assistance and social services. He will serve all Multnomah residents well, especially those with the greatest needs.',
      imageSrc: '/endorsements/ernesto-fonseca.jpeg',
    },
  ],

  // Donate
  donate: {
    heading: 'Make it count.',
    subheading: 'Sharing this site helps just as much.',
    button: 'Donate',
    disclaimer: 'Contributions are not tax-deductible. Oregon campaign finance laws apply.',
  },

  // Signup (email capture + volunteer link)
  signup: {
    heading: 'Campaigns send mailers and plant yard signs to remind you an election is happening.',
    headingBody: "We'd rather just email you.",
    button: 'Remind Me',
    title: 'Remind Me',
    emailPlaceholder: 'Email',
    zipPlaceholder: 'Zip code',
    submit: 'Submit',
    thankYou: 'Thank you',
    thankYouMessage: "We'll email you when the voters' pamphlet and your ballot are on the way.",
    volunteerLink: 'Want to knock on doors? Volunteer',
    closeLabel: 'Close modal',
    formLabel: 'Email signup',
    errors: {
      invalidEmail: 'Invalid email',
      invalidZip: 'Invalid zip code',
    },
  },

  // Volunteer Modal
  volunteerModal: {
    title: 'Volunteer',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    zip: 'Zip code',
    submit: 'Submit',
    thankYou: 'Thank you',
    thankYouMessage: "We'll be in touch shortly.",
    closeLabel: 'Close modal',
    formLabel: 'Volunteer signup',
    errors: {
      required: 'Required',
      invalidEmail: 'Invalid email',
      invalidZip: 'Invalid zip code',
    },
  },

  // Cookie Banner
  cookie: {
    message: 'This site uses cookies for basic functionality.',
    privacyLink: 'Privacy Policy',
    dismissLabel: 'Dismiss cookie notice',
    regionLabel: 'Cookie notice',
  },

  // Header
  header: {
    homeLabel: 'home',
    district: 'for District 2',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },

  // Footer
  footer: {
    issuesLabel: 'Issues',
    involvedLabel: 'Get Involved',
    volunteerLink: 'Volunteer',
    internshipsLink: 'Internships',
    donateLink: 'Donate',
    privacyLink: 'Privacy Policy',
    contactLink: 'Email',
  },

  // 404
  notFound: {
    code: '404',
    title: 'Page not found',
    message: "The page you're looking for doesn't exist.",
    backHome: 'Back to home',
  },
} as const;

export default en;

// Dictionary type — uses string instead of literals so translations can differ
export interface Dictionary {
  hero: { office: string };
  about: {
    photoAlt: string;
    paragraphs: readonly string[];
    statsLabel: string;
    stats: readonly {
      number: string;
      label: string;
      description: string;
      href?: string;
    }[];
  };
  labor: {
    intro: string;
    heading: string;
    pillars: readonly { title: string; body: string }[];
  };
  issues: {
    question: string;
    questionHref: string;
    answer: string;
    heading: string;
    leadIn: string;
    leadInBody: string;
    framework: readonly { title: string; description: string }[];
    items: readonly { title: string; body: string; href: string }[];
    keepReading: string;
  };
  endorsements: readonly { id: string; name: string; title: string; quote: string; imageSrc?: string }[];
  donate: { heading: string; subheading: string; button: string; disclaimer: string };
  signup: {
    heading: string;
    headingBody: string;
    button: string;
    title: string;
    emailPlaceholder: string;
    zipPlaceholder: string;
    submit: string;
    thankYou: string;
    thankYouMessage: string;
    volunteerLink: string;
    closeLabel: string;
    formLabel: string;
    errors: { invalidEmail: string; invalidZip: string };
  };
  volunteerModal: {
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    zip: string;
    submit: string;
    thankYou: string;
    thankYouMessage: string;
    closeLabel: string;
    formLabel: string;
    errors: { required: string; invalidEmail: string; invalidZip: string };
  };
  cookie: { message: string; privacyLink: string; dismissLabel: string; regionLabel: string };
  header: { homeLabel: string; district: string; menuOpen: string; menuClose: string };
  footer: {
    issuesLabel: string;
    involvedLabel: string;
    volunteerLink: string;
    internshipsLink: string;
    donateLink: string;
    privacyLink: string;
    contactLink: string;
  };
  notFound: { code: string; title: string; message: string; backHome: string };
}