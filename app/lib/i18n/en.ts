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

  // Issues
  issues: [
    {
      title: 'Homelessness & Services',
      body: 'Soluta nobis eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus. Temporibus autem quibusdam et aut officiis debitis rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint.',
    },
    {
      title: 'Public Safety',
      body: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    },
    {
      title: 'Housing & Affordability',
      body: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.',
    },
    {
      title: 'Fiscal Accountability',
      body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.',
    },
    {
      title: 'Behavioral Health',
      body: 'Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.',
    },
    {
      title: 'County Operations',
      body: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    },
  ],

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

  // Volunteer
  volunteer: {
    heading: "If you believe the county can work better, we'd like your help.",
    button: 'Volunteer',
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
  issues: readonly { title: string; body: string }[];
  endorsements: readonly { id: string; name: string; title: string; quote: string; imageSrc?: string }[];
  donate: { heading: string; button: string; disclaimer: string };
  volunteer: { heading: string; button: string };
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
  footer: { privacyLink: string; contactLink: string };
  notFound: { code: string; title: string; message: string; backHome: string };
}