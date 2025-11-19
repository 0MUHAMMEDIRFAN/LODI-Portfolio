// src/constants/index.ts
// Basic site-wide constants. Use NEXT_PUBLIC_* env vars to override in production.

export const SITE_URL: string =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://lodi.co.in';

export const SITE_NAME: string =
    process.env.NEXT_PUBLIC_SITE_NAME || 'LODI';

export const DEFAULT_LOCALE: string =
    process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'en-US';

export const API_BASE_URL: string =
    process.env.NEXT_PUBLIC_API_BASE_URL || `${SITE_URL}/api`;

export const CONTACT_EMAIL: string =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@lodi.example.com';

export type SocialKey = 'twitter' | 'linkedin' | 'facebook' | 'github' | 'instagram';

export const SOCIALS: Record<SocialKey, string> = {
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/lodi',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/company/lodi',
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/lodi',
    github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/lodi',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/lodi',
} as const;

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';