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
    photoAlt: 'Candidate Photo',
    paragraphs: [
      "Candidate's story goes here. Keep it personal and specific — not a resume, but a window into who they are and what drives them. 2-3 paragraphs.",
      "What brought them to this moment. A specific experience, a pattern they've seen in the community, a gap they want to fill.",
      "What they believe the county commission can do differently, and why they're the person to do it.",
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
        title: 'Housing & cost of living',
        body: "Portland's housing crisis isn't just about building more units. It's about why the units we fund take four years and cost twice what they should.",
        href: '/issues/housing',
      },
      {
        title: 'Public safety',
        body: "The county's role in public safety isn't policing — it's the justice system, crisis response, and reentry programs that determine whether people cycle through or find a way out.",
        href: '/issues/public-safety',
      },
    ],
    keepReading: 'Keep reading',
  },

  // Endorsements
  endorsements: [
    {
      id: 'endorser-1',
      name: 'Name One',
      title: 'Title / Organization',
      quote: 'Endorsement quote goes here. The best ones are specific — what the candidate did, not just who they are.',
    },
    {
      id: 'endorser-2',
      name: 'Name Two',
      title: 'Title / Organization',
      quote: 'Second endorsement. Keep these genuine. A short, real quote outperforms a long, generic one every time.',
    },
    {
      id: 'endorser-3',
      name: 'Name Three',
      title: 'Title / Organization',
      quote: 'Third endorsement. Three is a strong starting number. Add more as the campaign builds support.',
    },
  ],

  // Donate
  donate: {
    heading: 'Your contribution goes directly to reaching voters across the county.',
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
    contactLink: 'Contact',
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
  donate: { heading: string; button: string; disclaimer: string };
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