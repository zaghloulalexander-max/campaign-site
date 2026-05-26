// ============================================================================
// SITE CONFIGURATION
// ============================================================================
// Single source of truth. Update once, flows everywhere.
// ============================================================================

export const siteConfig = {
  candidate: {
    firstName: 'Nabil',
    lastName: 'Zaghloul',
    fullName: 'Nabil Zaghloul',
    title: 'for District 2',
    office: 'Multnomah County Commissioner',
    district: 'District 2',
  },

  meta: {
    url: 'https://electnabil.com',
    tagline: 'Building a Portland that works for everyone.',
    email: 'info@electnabil.com',
  },

  social: {
    instagram: '',
    twitter: '',
    facebook: '',
  },

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Issues', href: '#issues' },
    { label: 'Endorsements', href: '#endorsements' },
  ] as const,

  donateUrl: 'https://donation.c-esystems.com/campaign/electnabil',

  // Legally required
  disclaimer: 'Paid for by Elect Nabil. Not authorized by any candidate or candidate committee.',
} as const;

export type SiteConfig = typeof siteConfig;