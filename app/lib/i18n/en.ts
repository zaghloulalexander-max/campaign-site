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
      "I've spent over 32 years working inside Multnomah County government. I started as a manager in the Department of Community Justice, parole, probation, domestic violence, and juvenile caseloads. After about a decade, I moved to the Health Department, where I managed medical and dental clinics, then to the Department of County Human Services, where I currently direct programs in mental health, addiction services, housing stabilization, eviction prevention, economic support, SNAP, and youth services.",
      "Over that time, I've managed hundreds of millions of dollars in public funding, created programs that didn't exist before, and worked directly with thousands of families in crisis. The Economic Justice and Recovery Program, which I built during the pandemic, in combination with general and state funding served 2,800 households in its first year with a 90% retention rate. Bienestar Youth Services, which I created and fund within my existing budget, works with 50 kids a week in the Cully neighborhood to prevent youth violence and gang recruitment.",
      "I'm running for county commissioner because after over 32 years inside the system, I want to apply what I've learned from a seat where I can influence how the entire county budget is spent. I know which programs work, which ones don't, and what it takes to build something that actually delivers results. The county has the resources. The question is whether they're being used well.",
    ],
  },

  // Issues — Educational intro + heading + framework + teasers
  issues: {
    question: 'What does a Multnomah County commissioner do?',
    questionHref: '/issues/county-commissioner',
    answer: 'The county manages a $3.9 billion annual budget across homeless services, behavioral health, public safety, and operations serving over 800,000 residents.',
    heading: 'Issues',
    leadIn: "After 32 years inside county government, I've worked directly in the systems that deliver homeless services, behavioral health, and public safety to Multnomah County residents.",
    leadInBody: "My approach is built around accountability. When programs are measured by outcomes, you learn where the money is working and where it isn't. When that information is transparent, the public can see it too. The goal is simple: better results for every tax dollar collected.",
    framework: [],
    items: [
      {
        title: 'Homelessness',
        body: "The county's Homeless Services Department has a $310 million budget. Most of the programs it funds measure how many people they serve, not whether those people stay housed.",
        href: '/issues/homelessness',
      },
      {
        title: 'Behavioral health',
        body: "The county delivers counseling, addiction treatment, and crisis response through separate systems with separate funding. For the people who need them, they overlap almost entirely.",
        href: '/issues/behavioral-health',
      },
      {
        title: 'Public safety',
        body: "Public safety means different things to different people. I spent over a decade as a manager in the Department of Community Justice.",
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
      quote: 'Endorsement statement to come.',
      imageSrc: '/endorsements/nafisa-fai.jpeg',
    },
    {
      id: 'ernesto-fonseca',
      name: 'Dr. Ernesto Fonseca',
      title: 'CEO, Hacienda CDC',
      quote: 'Nabil has supported Black, Asian, White, Latino, and Native American working class communities for more than 32 years through housing assistance and social services. He will serve all Multnomah residents well, especially those with the greatest needs.',
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
    volunteerLink: 'Want to do more? Volunteer',
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
  about: { photoAlt: string; paragraphs: readonly string[] };
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