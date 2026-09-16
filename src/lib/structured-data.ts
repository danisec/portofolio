import { siteConfig } from '@/lib/site';

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/profile/dani.webp`,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    email: `mailto:${siteConfig.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tangerang Selatan',
      addressCountry: 'ID',
    },
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
    knowsAbout: [
      'Laravel',
      'React',
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'MySQL',
      'Tailwind CSS',
    ],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
    description: siteConfig.description,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}
