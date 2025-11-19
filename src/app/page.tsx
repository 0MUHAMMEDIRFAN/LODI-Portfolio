import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Statistics from '@/components/Statistics';
import AppDownload from '@/components/AppDownload';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import { Metadata } from 'next';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, SOCIALS } from '@/constants';

export const metadata: Metadata = {
  title: `${SITE_NAME} - Smart Logistics Platform | Connect Return Trucks with Loads`,
  description: `${SITE_NAME} is revolutionizing logistics by connecting empty return trucks with loads. Book on-demand pickups, reduce empty miles, and maximize profits.`,
  keywords: ['logistics platform', 'return trucks', 'load matching', 'on-demand logistics', 'truck booking', 'freight delivery', 'cargo transport', 'smart logistics', SITE_NAME, 'logistics app', 'truck drivers', 'supply chain', 'logistics network', 'empty miles', 'truck optimization'],
  authors: [{ name: `${SITE_NAME} Logistics` }],
  creator: `${SITE_NAME} Logistics`,
  publisher: `${SITE_NAME} Logistics Platform`,
  applicationName: SITE_NAME,
  alternates: {
    canonical: SITE_URL,
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
    url: SITE_URL,
    title: `${SITE_NAME} - Smart Logistics Platform | Connect Return Trucks with Loads`,
    description: `${SITE_NAME} is revolutionizing logistics by connecting empty return trucks with loads. Book on-demand pickups, reduce empty miles, and maximize profits.`,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Smart Logistics Platform`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - Smart Logistics Platform | Connect Return Trucks with Loads`,
    description: `${SITE_NAME} is revolutionizing logistics by connecting empty return trucks with loads. Book on-demand pickups, reduce empty miles, and maximize profits.`,
    creator: SOCIALS.twitter.replace('https://twitter.com/', '@'),
    images: [DEFAULT_OG_IMAGE],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  category: 'Technology',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData type="website" />
      <Hero />
      <Features />
      <HowItWorks />
      <Statistics />
      <AppDownload />
      <Footer />
    </main>
  );
}
