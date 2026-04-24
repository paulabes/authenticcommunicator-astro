export const siteOrigin = 'https://www.authenticcommunicatorglobal.com';

export const business = {
  name: 'Authentic Communicator Global',
  legalName: 'Authentic Communicator Global',
  founder: 'Alice Deville',
  city: 'London',
  country: 'United Kingdom',
  countryCode: 'GB',
  region: 'Greater London',
  email: 'alice@authenticcommunicatorglobal.com',
  priceRange: '£££',
  foundingDate: '2024',
  clients: ['BlackRock', 'Deloitte', 'JP Morgan', 'Google', '10 Downing Street'],
  servicesArea: ['London', 'United Kingdom', 'United States', 'Europe'],
  // Approximate London coordinates - coaching is online worldwide + in-person in central London
  geo: { latitude: 51.5074, longitude: -0.1278 },
  currenciesAccepted: 'GBP, USD, EUR',
  paymentAccepted: 'Bank transfer, Credit Card',
};

export const aliceBio = {
  name: 'Alice Deville',
  jobTitle: 'Voice and Communication Coach',
  alumniOf: 'Guildhall School of Music and Drama',
  knowsAbout: [
    'Public speaking',
    'Voice technique',
    'UK English pronunciation',
    'Performance anxiety',
    'Storytelling for business',
    'Executive communication',
    'Pitch coaching',
    'Interview coaching',
  ],
  description:
    'Former opera singer trained at the Guildhall School of Music and Drama. 10+ years coaching executives and professionals from BlackRock, Deloitte, JP Morgan, Google, and 10 Downing Street.',
};

import { reviews } from './reviews';

export interface GoogleReview {
  name: string;
  text: string;
  date: string;
}

/**
 * Aggregate across all published reviews in reviews.ts.
 * The set of reviews is manually curated from Google, all 5-star.
 */
export function aggregateRatingSchema() {
  return {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    bestRating: '5',
    worstRating: '1',
    ratingCount: reviews.length,
    reviewCount: reviews.length,
  };
}

export function reviewSchema(r: GoogleReview) {
  return {
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    author: { '@type': 'Person', name: r.name },
    reviewBody: r.text,
    itemReviewed: { '@id': `${siteOrigin}/#organization` },
  };
}

export function orgSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteOrigin}/#organization`,
    name: business.name,
    url: siteOrigin,
    logo: `${siteOrigin}/favicon.svg`,
    image: `${siteOrigin}/images/authentic-communicator-global-alice.jpg`,
    description:
      'Premium 1:1 voice and communication coaching for executives and professionals in London and worldwide. Bespoke programmes for public speaking, UK English pronunciation, and high-stakes performance.',
    priceRange: business.priceRange,
    currenciesAccepted: business.currenciesAccepted,
    paymentAccepted: business.paymentAccepted,
    aggregateRating: aggregateRatingSchema(),
    review: reviews.slice(0, 3).map(reviewSchema),
    founder: {
      '@type': 'Person',
      name: aliceBio.name,
      jobTitle: aliceBio.jobTitle,
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: aliceBio.alumniOf,
      },
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.city,
      addressRegion: business.region,
      addressCountry: business.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'London',
        containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
      },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Place', name: 'Europe' },
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: business.geo.latitude,
          longitude: business.geo.longitude,
        },
        geoRadius: '40000',
        description: 'In-person coaching available within 40km of central London',
      },
    ],
    serviceType: [
      'Public speaking coaching',
      'Voice coaching',
      'UK English pronunciation coaching',
      'Performance anxiety coaching',
      'Executive communication coaching',
    ],
    knowsLanguage: ['en-GB', 'en-US'],
    email: business.email,
    sameAs: [
      'https://www.instagram.com/authenticcommunicatorglobal',
      'https://www.linkedin.com/in/alice-deville-b73b6116a/',
      'https://www.tiktok.com/@publicspeakingandvoice',
    ],
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteOrigin}/about#alice`,
    name: aliceBio.name,
    jobTitle: aliceBio.jobTitle,
    description: aliceBio.description,
    image: `${siteOrigin}/images/Alice-Deville.png`,
    url: `${siteOrigin}/about`,
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: aliceBio.alumniOf,
      url: 'https://www.gsmd.ac.uk/',
    },
    knowsAbout: aliceBio.knowsAbout,
    worksFor: {
      '@type': 'ProfessionalService',
      '@id': `${siteOrigin}/#organization`,
      name: business.name,
    },
    nationality: { '@type': 'Country', name: business.country },
    workLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: business.city,
        addressCountry: business.countryCode,
      },
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteOrigin}/#website`,
    url: siteOrigin,
    name: business.name,
    publisher: { '@id': `${siteOrigin}/#organization` },
    inLanguage: 'en-GB',
  };
}

export function siteNavigationSchema() {
  const items = [
    { name: 'Home', url: `${siteOrigin}/` },
    { name: 'Packages', url: `${siteOrigin}/packages` },
    { name: 'Confident Speaker', url: `${siteOrigin}/packages/confident-speaker` },
    { name: 'Confident Pronunciation', url: `${siteOrigin}/packages/confident-pronunciation` },
    { name: 'Intensive 90-Minute Session', url: `${siteOrigin}/packages/intensive-session` },
    { name: 'About', url: `${siteOrigin}/about` },
    { name: 'Inspiration', url: `${siteOrigin}/inspiration` },
    { name: 'Contact', url: `${siteOrigin}/contact` },
    { name: 'Free Consultation', url: `${siteOrigin}/free-consultation` },
  ];
  return {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    '@id': `${siteOrigin}/#primary-nav`,
    name: items.map(i => i.name),
    url: items.map(i => i.url),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteOrigin}${item.url}`,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  slug: string;
  description: string;
  serviceType: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteOrigin}/packages/${opts.slug}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    image: opts.image ? `${siteOrigin}${opts.image}` : undefined,
    provider: { '@id': `${siteOrigin}/#organization` },
    areaServed: business.servicesArea.map(a => ({ '@type': 'Place', name: a })),
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Executives, senior professionals, and public figures',
    },
    url: `${siteOrigin}/packages/${opts.slug}`,
  };
}

/**
 * Build FAQPage schema with per-question speakable selectors.
 * Expects the rendered FAQ markup to tag each answer with
 * `data-faq-answer="<slug>"` so voice assistants can extract it.
 */
export function faqPageSchema(
  faqs: Array<{ q: string; a: string; slug?: string }>,
  pageUrl?: string
) {
  const slugify = (s: string) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 60);

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(pageUrl ? { '@id': `${pageUrl}#faq` } : {}),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['[data-faq-answer]'],
    },
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
      ...(f.slug || f.q
        ? { '@id': `${pageUrl ?? ''}#faq-${f.slug ?? slugify(f.q)}` }
        : {}),
    })),
  };
}
