"use client";
import { SITE_URL, SITE_NAME, CONTACT_EMAIL, SOCIALS } from '@/constants';

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'article' | 'breadcrumb';
}

export default function StructuredData({ type = 'organization' }: StructuredDataProps) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: `${SITE_NAME} Logistics`,
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: `${SITE_NAME} is a smart logistics platform connecting return trucks with loads, reducing empty miles and maximizing profits.`,
    foundingDate: '2023',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-234-567-890',
      contactType: 'Customer Service',
      email: CONTACT_EMAIL,
      areaServed: 'US',
      availableLanguage: ['English'],
    },
    sameAs: [
      SOCIALS.twitter,
      SOCIALS.facebook,
      SOCIALS.linkedin,
      SOCIALS.instagram,
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: `123 ${SITE_NAME} Street`,
      addressLocality: 'Logistics City',
      addressRegion: 'CA',
      postalCode: '90001',
      addressCountry: 'US',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${SITE_NAME} Logistics`,
    url: SITE_URL,
    description: 'Smart logistics platform connecting return trucks with loads',
    publisher: {
      '@type': 'Organization',
      name: `${SITE_NAME} Logistics`,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Logistics Platform',
    provider: {
      '@type': 'Organization',
      name: `${SITE_NAME} Logistics`,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Logistics Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Load Matching',
            description: 'Connect empty return trucks with available loads',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'On-Demand Booking',
            description: 'Book trucks and pickups instantly',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organizationSchema, websiteSchema, serviceSchema]),
      }}
    />
  );
}
