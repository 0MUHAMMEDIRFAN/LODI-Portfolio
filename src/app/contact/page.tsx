import { Metadata } from 'next';
import { SITE_URL, SITE_NAME, SOCIALS, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from '@/constants';

export const metadata: Metadata = {
  title: `Contact ${SITE_NAME} - Get in Touch with Our Logistics Team`,
  description: `Have questions about ${SITE_NAME} logistics platform? Contact us for partnerships, support, or inquiries. Reach our team at ${CONTACT_EMAIL} or +1 234 567 890. We're here to help.`,
  keywords: [`contact ${SITE_NAME}`, 'logistics support', 'customer service', 'business inquiries', 'partnership opportunities', 'contact logistics company'],
  authors: [{ name: `${SITE_NAME} Logistics` }],
  creator: `${SITE_NAME} Logistics`,
  publisher: `${SITE_NAME} Logistics Platform`,
  alternates: {
    canonical: `${SITE_URL}/contact`,
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
    url: `${SITE_URL}/contact`,
    title: `Contact ${SITE_NAME} - Get in Touch with Our Logistics Team`,
    description: `Have questions about ${SITE_NAME} logistics platform? Contact us for partnerships, support, or inquiries.`,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/og-contact.jpg`,
        width: 1200,
        height: 630,
        alt: `Contact ${SITE_NAME} Logistics`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact ${SITE_NAME} - Get in Touch with Our Logistics Team`,
    description: `Have questions about ${SITE_NAME} logistics platform? Contact us for partnerships, support, or inquiries.`,
    creator: SOCIALS.twitter.replace('https://twitter.com/', '@'),
    images: [`${SITE_URL}/og-contact.jpg`],
  },
};

export default function Contact() {
  return (
    <section className="min-h-screen py-16 px-4 sm:px-8 lg:px-24 bg-white text-black">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          Have questions or want to partner with {SITE_NAME}? Reach out to us below.
        </p>
        <form className="bg-gray-50 rounded-xl p-6 shadow-lg text-left">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" type="text" id="name" name="name" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" type="email" id="email" name="email" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
            <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" id="message" name="message" rows={4} required></textarea>
          </div>
          <button type="submit" className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all">Send Message</button>
        </form>
        <div className="mt-8 text-left">
          <h2 className="text-xl font-semibold mb-2">Company Info</h2>
          <p className="text-gray-700">Email: {CONTACT_EMAIL}</p>
          <p className="text-gray-700">Phone: {CONTACT_PHONE}</p>
          <p className="text-gray-700">Address: {CONTACT_ADDRESS}</p>
        </div>
      </div>
    </section>
  );
}
