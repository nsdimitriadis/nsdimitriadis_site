# Overview

This is a minimal personal portfolio website built with Astro 5, featuring a dark/neon aesthetic. The site showcases professional experience (CV), sports interests, musical tastes, and provides contact information. Built as a static site for GitHub Pages hosting, it emphasizes performance, accessibility, and clean design.

# User Preferences

- Preferred communication style: Simple, everyday language
- Design philosophy: Minimal, high-contrast, black base with neon accents
- Focus: Lean, performant, accessible code

# Project Architecture

## Pages & Routes

### Main Pages
- `/` - Home page with hero, 4 flip tiles (CV, Sports, Music, Contact), and tech carousel
- `/cv` - Professional timeline with 4 career checkpoints and company logos
- `/sports` - Sports hub with 3 bright tiles (Rugby, Football, Basketball)
- `/music` - Music interests with bright placeholder grid
- `/contact` - Email and social links (no form)

### CV Article Pages
- `/cv/papercup-orchestrator` - June 2025 (with hero image and logo)
- `/cv/madecom-secret-weapon` - November 2022 (with hero image and logo)
- `/cv/project-agora-ant-worker` - November 2021 (with hero image and logo)
- `/cv/neurocom-rising-star` - June 2019 (with hero image and logo)

### Sports Article Pages
- `/sports/rugby`
- `/sports/football`
- `/sports/basketball`

## Frontend Framework

- **Astro 5.12.9** - Static site generator with islands architecture
- **React 19.1.1** - Used only for interactive components (FlipTile, TechCarousel)
- **TypeScript 5.9.2** - Type safety throughout
- **Static generation** targeting GitHub Pages

## Styling & Design

- **TailwindCSS 3.4.17** - Utility-first styling
- **@tailwindcss/typography** - Prose styling for article content
- **Dark theme** with neon accents:
  - Purple: #8B5CF6
  - Pink: #EC4899
  - Blue: #3B82F6
  - Silver: #C0C0C0
- **Inter font** from Google Fonts
- **CSS animations** with `prefers-reduced-motion` support

## Interactive Components

### FlipTile (React)
- 3D flip animation on hover (desktop)
- Semantic `<a>` element for proper link behavior
- Keyboard accessible with Enter/Space activation
- Reduced motion fallback
- **Variant support**: `default` | `bright` for adjustable surface brightness

### TechCarousel (React)
- Infinite horizontal scroll
- Pause on hover
- Swipeable on mobile
- Data-driven from `src/data/technologies.ts`
- Displays technology icons (h-5 w-5) with labels

## Content Structure

### Data Files
- `src/data/technologies.ts` - Tech stack with icon paths
- `src/data/cvEntries.ts` - CV entries with logos and images

### Image Organization
- `public/images/tech/` - Technology icons for carousel
- `public/images/tiles/` - Tile background images
- `public/images/logos/` - Company logos (SVG preferred)
- `public/images/cv/` - CV tile and hero images

### CV Entry Schema
```ts
{
  date: string;
  title: string;
  slug: string;
  description: string;
  gradient: string;
  logoSrc?: string;        // Company logo
  tileImage?: string;      // Tile background
  coverImage?: string;     // Hero image (displayed above title)
}
```

## Key Files

- `src/pages/index.astro` - Home page
- `src/pages/cv/index.astro` - CV timeline with logos
- `src/pages/sports/index.astro` - Sports hub with bright tiles
- `src/pages/music.astro` - Music page with bright tiles
- `src/pages/contact.astro` - Contact (email + social only)
- `src/components/FlipTile.tsx` - Flip tile component with variant prop
- `src/components/TechCarousel.tsx` - Tech carousel component
- `src/components/Header.astro` - Site header with navigation
- `src/components/Footer.astro` - Minimal footer
- `src/layouts/BaseLayout.astro` - Global layout
- `src/data/technologies.ts` - Tech stack data
- `src/data/cvEntries.ts` - CV entries data
- `src/styles/global.css` - Global styles and custom animations

## Recent Changes (October 2025)

### Initial Redesign
- Redesigned to minimal 4-section site structure
- Removed blog/posts/notes/links collections
- Removed Pagefind search integration
- Created FlipTile and TechCarousel React components
- Implemented CV timeline with 4 checkpoints
- Added Sports and Music sections
- Streamlined navigation and footer

### Second Round Updates
- **Contact page**: Removed form, kept email + social links only
- **Tech carousel**: Created `technologies.ts` with proper icon paths (`/images/tech/`)
- **FlipTile variant**: Added `bright` variant for Sports/Music tiles (increased surface brightness)
- **CV data structure**: Created `cvEntries.ts` with logo/tile/cover image support
- **CV timeline**: Added company logos to checkpoint tiles
- **CV articles**: Hero images now display ABOVE titles with logos
- **Image structure**: Created organized directory structure in `public/images/`
- **Documentation**: Updated README with comprehensive image usage instructions

# External Dependencies

## Core Framework
- Astro ecosystem: @astrojs/mdx, @astrojs/react, @astrojs/sitemap, @astrojs/tailwind
- React ecosystem: react, react-dom, @types/react, @types/react-dom
- Styling: tailwindcss, @tailwindcss/typography

## Services
- GitHub Pages - Static hosting
- Google Fonts - Inter font family

## Development
- TypeScript - Type checking
- Astro's strict TypeScript config

# Development

## Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Adding Content

### Tech Stack Items
Edit `src/data/technologies.ts` to add/remove technologies:
```ts
{ label: 'Python', icon: '/images/tech/python.svg' }
```

### Images
Place images in organized directories under `/public/images/`:
- Tech icons → `/public/images/tech/`
- Tile images → `/public/images/tiles/`
- Company logos → `/public/images/logos/`
- CV images → `/public/images/cv/`

### CV Entries
Update `src/data/cvEntries.ts` with logo and image paths. CV articles automatically display hero images above titles.

### Sports/Music Tiles
Use `variant="bright"` on FlipTile for brighter tiles matching the Music section style.

The site prioritizes performance, accessibility, and maintainability with minimal complexity.
