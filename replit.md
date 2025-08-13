# Overview

This is a personal static website built with Astro for GitHub Pages hosting. The site features a sophisticated black-themed design with neon accents (purple, pink, blue, silver) and serves as both a professional portfolio and personal blog. It's designed to showcase work as a data engineer/software engineer while maintaining a warm, subtly humorous tone. The architecture emphasizes performance, SEO optimization, and content organization through structured collections.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Framework
- **Astro 5.12.9** as the primary static site generator, chosen for zero-runtime JavaScript and optimal performance
- **React 19.1.1** integration via Astro islands for interactive components only where needed
- **TypeScript 5.9.2** for type safety and better development experience
- Static generation targeting GitHub Pages deployment

## Styling & Design System
- **TailwindCSS 4.1.11** with custom configuration for utility-first styling
- **@tailwindcss/typography** for rich text formatting in blog posts
- Custom CSS variables defined in global.css for consistent theming (neon colors, grays)
- **Inter font family** from Google Fonts for modern typography
- Black primary background with neon accent colors (purple #8B5CF6, pink #EC4899, blue #3B82F6, silver #C0C0C0)

## Content Management
- **Content Collections** architecture with four main types:
  - `posts`: Long-form blog content with tags, dates, and featured status
  - `notes`: Short-form content pieces
  - `links`: Curated external resources
  - `pages`: Static pages like about, contact
- **MDX support** via @astrojs/mdx for rich content authoring
- **Zod schemas** for content validation and type safety
- Tag-based filtering system for content organization

## Search & Navigation
- **Pagefind integration** via astro-pagefind for static site search
- React-based search component with keyboard shortcuts (Cmd/Ctrl+K)
- Tag filtering system for content discovery
- Sitemap generation for SEO

## Performance Optimizations
- Static site generation for optimal loading speed
- Astro's selective hydration model (islands architecture)
- Image optimization through Astro's built-in image processing
- Minimal JavaScript footprint with React only for interactive components

## SEO & Analytics
- Sitemap generation via @astrojs/sitemap
- Robots.txt configuration for search engine indexing
- Plausible analytics integration (privacy-focused)
- Meta tags and structured data support

# External Dependencies

## Core Framework Dependencies
- **Astro ecosystem**: @astrojs/mdx, @astrojs/react, @astrojs/sitemap, @astrojs/tailwind
- **React ecosystem**: react, react-dom, @types/react, @types/react-dom
- **Styling**: tailwindcss, @tailwindcss/typography

## Third-party Services
- **GitHub Pages**: Static hosting platform
- **Google Fonts**: Inter font family for typography
- **Plausible Analytics**: Privacy-focused website analytics (configurable via environment variables)
- **Pagefind**: Static site search functionality via astro-pagefind

## Development Tools
- **TypeScript**: Type checking and development experience
- **Astro's TypeScript config**: Strict mode configuration extending astro/tsconfigs/strict

## Content & Media
- **MDX**: Enhanced Markdown with React component support
- **Astro Image**: Built-in image optimization and processing
- **Zod**: Runtime type validation for content schemas

The architecture prioritizes performance, maintainability, and content organization while providing a sophisticated user experience with minimal complexity.