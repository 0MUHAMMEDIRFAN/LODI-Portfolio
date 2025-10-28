# LODI - Smart Logistics Platform

A modern, professional portfolio website for LODI, a revolutionary logistics platform that connects return trucks with loads and enables on-demand truck booking.

## 🚀 About LODI

LODI is transforming the logistics industry by:
- **Optimizing Return Trucks**: Connecting empty return trucks with loads to eliminate wasted trips
- **On-Demand Booking**: Enabling instant truck/pickup bookings similar to ride-sharing platforms
- **Driver Community**: Hosting the largest network of verified drivers and logistics partners
- **Corporate Solutions**: Providing enterprise-grade logistics solutions for businesses
- **Cost Savings**: Helping businesses reduce logistics costs by up to 40%

## 🎨 Design

The website features a clean, minimalist design inspired by Apple's aesthetic:
- **Primary Color**: Black (#000000)
- **Background**: White with subtle grays
- **Typography**: SF Pro Display / System fonts
- **Layout**: Modern, responsive, and accessible

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: System fonts (Apple-inspired)
- **Icons**: Emoji placeholders (replace with custom icons)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
LODI-Portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Hero.tsx         # Hero section
│       ├── Features.tsx     # Features showcase
│       ├── HowItWorks.tsx   # Process explanation
│       ├── Statistics.tsx   # Impact metrics
│       ├── AppDownload.tsx  # Mobile app section
│       └── Footer.tsx       # Footer with links
├── public/                  # Static assets (add your logo here)
├── tailwind.config.ts       # Tailwind configuration
├── next.config.ts           # Next.js configuration
└── package.json
```

## 🎯 Sections

1. **Hero**: Main landing section with LODI branding and CTAs
2. **Features**: Key platform capabilities and benefits
3. **How It Works**: Step-by-step process explanation
4. **Statistics**: Impact metrics and testimonials
5. **App Download**: Mobile app coming soon section
6. **Footer**: Navigation, newsletter signup, and social links

## 🔧 Customization

### Replace Logo

1. Add your logo to the `public/` folder
2. Update the logo placeholder in `src/components/Hero.tsx`
3. Update the footer logo in `src/components/Footer.tsx`

### Update Images

- Replace emoji placeholders with actual images
- Add images to the `public/` folder
- Update component imports accordingly

### Modify Content

All content is contained in the component files. Simply edit the text, numbers, and descriptions to match your needs.

### Color Scheme

To modify the color scheme, edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#000000', // Change this
  },
}
```

## 📱 Mobile App

The mobile app section includes placeholders for:
- iOS App Store badge
- Google Play Store badge
- App screenshots/mockups

These will be updated once the apps are available.

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
```

Deploy to [Vercel](https://vercel.com) with one click or via CLI:

```bash
vercel
```

### Other Platforms

Build the project:

```bash
npm run build
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

This is a portfolio website for LODI. For updates or contributions, please contact the development team.

## 📄 License

© 2025 LODI. All rights reserved.

## 📞 Contact

- Website: [Coming Soon]
- Email: [Your Email]
- Social Media: [Links in Footer]

---

**Note**: This is a portfolio/marketing website. Replace all placeholder content, images, and logos with actual LODI branding assets.
