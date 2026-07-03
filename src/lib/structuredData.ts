export const SITE_URL = 'https://info.pelledeontwikkelaar.be'
export const OG_IMAGE = `${SITE_URL}/og-image.jpeg`

export const PROFESSIONAL_SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Pelle De Ontwikkelaar',
  image: OG_IMAGE,
  url: `${SITE_URL}/`,
  telephone: '+32498655565',
  email: 'info@pelledeontwikkelaar.be',
  vatID: 'BE 0803.076.163',
  founder: { '@type': 'Person', name: 'Pelle Reyniers' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Antwerpen',
    addressCountry: 'BE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.2194,
    longitude: 4.4025,
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 51.2194,
      longitude: 4.4025,
    },
    geoRadius: '80000',
  },
  knowsLanguage: ['en', 'nl'],
  description:
    'Startup advisory, software consulting, and authorised Ubiquiti UniFi network installation for founders and small teams in Antwerp and surroundings.',
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: 'IT advisory & architecture' },
    },
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: 'Software development' },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'UniFi / Ubiquiti network installation',
      },
    },
  ],
  priceRange: '$$',
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}
