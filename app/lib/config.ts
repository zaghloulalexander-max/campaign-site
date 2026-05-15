// ============================================
// SITE CONFIGURATION
// ============================================
// Update these values with the candidate's info.
// Everything flows from here — no hunting through components.
// ============================================

export const siteConfig = {
  candidate: {
    firstName: 'FirstName',
    lastName: 'LastName',
    fullName: 'FirstName LastName',
    title: 'for Portland',
    office: 'Multnomah County Commissioner',
    district: 'District X',
  },

  meta: {
    url: 'https://firstnameforportland.com',
    tagline: 'Building a Portland that works for everyone.',
    email: 'info@firstnameforportland.com',
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
    { label: 'Get Involved', href: '#volunteer' },
  ],

  // Donation link — ActBlue, etc.
  donateUrl: '#donate',

  // Paid-for-by disclaimer (legally required)
  disclaimer: 'Paid for by FirstName for Portland. Not authorized by any candidate or candidate committee.',
} as const;

export type SiteConfig = typeof siteConfig;
