// src/constants/index.ts
// Basic site-wide constants. Use NEXT_PUBLIC_* env vars to override in production.

import { IMAGE_PATHS } from "./files";

export const SITE_URL: string =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://lodi.co.in';

export const SITE_NAME: string =
    process.env.NEXT_PUBLIC_SITE_NAME || 'LODI';

export const DEFAULT_LOCALE: string =
    process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'en-US';

export const API_BASE_URL: string =
    process.env.NEXT_PUBLIC_API_BASE_URL || `${SITE_URL}/api`;

export const CONTACT_EMAIL: string =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@lodi.co.in';

export const CONTACT_PHONE: string =
    process.env.NEXT_PUBLIC_CONTACT_PHONE || '+1 234 567 890';

export const CONTACT_ADDRESS: string =
    process.env.NEXT_PUBLIC_CONTACT_ADDRESS || '';

export type SocialKey = 'twitter' | 'linkedin' | 'facebook' | 'github' | 'instagram';

export const SOCIALS: Record<SocialKey, string> = {
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/lodi.co.in',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/company/lodi.co.in',
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/lodi.co.in',
    github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/lodi.co.in',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/lodi.co.in',
} as const;

export const DEFAULT_OG_IMAGE = IMAGE_PATHS.LOGO_SMALL;

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';