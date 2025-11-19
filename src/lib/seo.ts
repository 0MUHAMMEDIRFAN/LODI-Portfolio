import { Metadata } from 'next';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, SOCIALS } from '@/constants';

export const siteConfig = {
  name: SITE_NAME,
  title: `${SITE_NAME} - Smart Logistics Platform | Connect Return Trucks with Loads`,
  description: `${SITE_NAME} is revolutionizing logistics by connecting empty return trucks with loads. Book on-demand pickups, reduce empty miles, and maximize profits. Join 10,000+ drivers and 500+ corporate partners.`,
  url: SITE_URL,
  ogImage: DEFAULT_OG_IMAGE,
  keywords: [
    'logistics platform',
    'return trucks',
    'load matching',
    'on-demand logistics',
    'truck booking',
    'freight delivery',
    'cargo transport',
    'smart logistics',
    SITE_NAME,
    'logistics app',
    'truck drivers',
    'supply chain',
    'logistics network',
    'empty miles',
    'truck optimization'
  ],
  author: `${SITE_NAME} Logistics`,
  publisher: `${SITE_NAME} Logistics Platform`,
  twitterHandle: SOCIALS.twitter.replace('https://twitter.com/', '@'),
};

export function generateMetadata(
  title?: string,
  description?: string,
  path: string = '/',
  keywords?: string[]
): Metadata {
  const fullTitle = title || siteConfig.title;
  const fullDescription = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  const allKeywords = keywords ? [...siteConfig.keywords, ...keywords] : siteConfig.keywords;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: allKeywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.publisher,
    applicationName: siteConfig.name,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: url,
      title: fullTitle,
      description: fullDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}${siteConfig.ogImage}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      creator: siteConfig.twitterHandle,
      images: [`${siteConfig.url}${siteConfig.ogImage}`],
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
    category: 'Technology',
  };
}
