// src/constants/files.ts
// Image path constants for the LODI portfolio
export const IMAGE_PATHS = {
    LOGO: '/Logos/Gen-3/logo_512.png',
    LOGO_SMALL: '/Logos/Gen-3/logo_144.png',

    HERO_DESKTOP: '/images/hero/hero-desktop.jpg',
    HERO_MOBILE: '/images/hero/hero-mobile.jpg',

    ABOUT_ILLUSTRATION: '/images/about/about-illustration.svg',

    SERVICE_ICON_1: '/images/services/service-1.svg',
    SERVICE_ICON_2: '/images/services/service-2.svg',
    SERVICE_ICON_3: '/images/services/service-3.svg',

    TEAM_MEMBER_1: '/images/team/member-1.jpg',
    TEAM_MEMBER_2: '/images/team/member-2.jpg',
    TEAM_MEMBER_3: '/images/team/member-3.jpg',

    CLIENT_LOGO_1: '/images/clients/client-1.png',
    CLIENT_LOGO_2: '/images/clients/client-2.png',
    CLIENT_LOGO_3: '/images/clients/client-3.png',

    PLACEHOLDER: '/images/placeholder.png',
} as const;

export type ImageKey = keyof typeof IMAGE_PATHS;

export const getImagePath = (key: ImageKey) => IMAGE_PATHS[key];