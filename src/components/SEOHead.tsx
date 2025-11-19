"use client";
import Head from "next/head";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  author?: string;
  publisher?: string;
  robots?: string;
}

export default function SEOHead({
  title = "LODI - Smart Logistics Platform | Connect Return Trucks with Loads",
  description = "LODI is revolutionizing logistics by connecting empty return trucks with loads. Book on-demand pickups, reduce empty miles, and maximize profits. Join 10,000+ drivers and 500+ corporate partners.",
  keywords = "logistics platform, return trucks, load matching, on-demand logistics, truck booking, freight delivery, cargo transport, smart logistics, LODI, logistics app, truck drivers, supply chain, logistics network",
  canonical,
  ogImage = "/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  author = "LODI Logistics",
  publisher = "LODI Logistics Platform",
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
}: SEOHeadProps) {
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://lodi-logistics.com";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="bingbot" content={robots} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="LODI Logistics" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:creator" content="@LODILogistics" />

      {/* Additional SEO Meta Tags */}
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      
      {/* Mobile App Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="LODI" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-navbutton-color" content="#000000" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
    </Head>
  );
}
