# Personal Portfolio - Nikos Dimitriadis

A minimal, modern portfolio website built with Astro 5, featuring a dark theme with neon accents. This static site showcases professional experience, sports interests, musical tastes, and provides contact information.

## 🚀 Tech Stack

- **Astro 5.12.9** - Static site generator
- **React 19.1.1** - Interactive components (islands architecture)
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **GitHub Pages** - Hosting

## 📂 Project Structure

```
/
├── public/
│   └── images/
│       ├── tech/        # Technology icons for carousel
│       ├── tiles/       # Tile background images
│       ├── logos/       # Company logos (SVG preferred)
│       └── cv/          # CV tile and hero images
├── src/
│   ├── components/      # Reusable components
│   │   ├── FlipTile.tsx
│   │   ├── TechCarousel.tsx
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── data/           # Data files
│   │   ├── technologies.ts
│   │   └── cvEntries.ts
│   ├── layouts/        # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/          # Routes
│   │   ├── index.astro
│   │   ├── cv/
│   │   ├── sports/
│   │   ├── music.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tailwind.config.mjs
```

## 🎨 Pages

- **Home** (`/`) - Hero, 4 flip tiles, tech carousel
- **CV** (`/cv`) - Professional timeline with 4 career checkpoints
- **Sports** (`/sports`) - Rugby, Football, Basketball
- **Music** (`/music`) - Musical interests and playlists
- **Contact** (`/contact`) - Email and social links

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📸 Adding Images

### Tech Carousel Icons

1. Place icon files (SVG or PNG) in `public/images/tech/`
2. Update `src/data/technologies.ts`:

```typescript
export const technologies: TechnologyItem[] = [
  { label: 'Python', icon: '/images/tech/python.svg' },
  { label: 'Your Tech', icon: '/images/tech/your-icon.svg' },
  // ...
];
```

### Sports/Music Tile Images

1. Place images in `public/images/tiles/`
2. Pass `backImage` prop to FlipTile:

```astro
<FlipTile
  title="Rugby"
  href="/sports/rugby"
  backImage="/images/tiles/rugby.jpg"
  variant="bright"
/>
```

### CV Entries with Logos and Images

1. Add company logos to `public/images/logos/` (SVG preferred)
2. Add hero/tile images to `public/images/cv/`
3. Update `src/data/cvEntries.ts`:

```typescript
export const cvEntries: CvEntry[] = [
  {
    date: 'June 2025',
    title: 'Your Position',
    slug: 'your-position',
    description: 'Brief description',
    gradient: 'from-neon-purple to-neon-pink',
    logoSrc: '/images/logos/company.svg',
    tileImage: '/images/cv/company-tile.jpg',
    coverImage: '/images/cv/company-hero.jpg'
  },
  // ...
];
```

The CV article pages will automatically display:
- Hero image (`coverImage`) above the title
- Company logo next to the date
- Content area for your article text

### General Images

Place any other images in `public/images/` and reference as `/images/your-image.jpg`

## ✏️ Adding Content

### Add Article Pages

Create new `.astro` files following existing patterns:

**CV Article** (`src/pages/cv/your-article.astro`):
```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import { cvEntries } from '@/data/cvEntries';

const entry = cvEntries.find(e => e.slug === 'your-article');
---

<BaseLayout title="Your Title" article={true}>
  <article class="py-20 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Breadcrumb, hero image, title, and content -->
    </div>
  </article>
</BaseLayout>
```

## 🎨 Customization

### Colors

Edit `tailwind.config.mjs`:

```javascript
colors: {
  'neon-purple': '#8B5CF6',
  'neon-pink': '#EC4899',
  'neon-blue': '#3B82F6',
  'silver': '#C0C0C0',
}
```

### Tile Brightness

Use the `variant` prop on FlipTile for brighter tiles:

```astro
<FlipTile
  title="Sports"
  href="/sports"
  variant="bright"  // Increases surface brightness and contrast
/>
```

### Animations

Customize in `src/styles/global.css`. All animations respect `prefers-reduced-motion`.

## 🚢 Deployment

### GitHub Pages

1. Update `site` in `astro.config.mjs`:
```javascript
site: 'https://your-username.github.io'
```

2. Build and deploy:
```bash
npm run build
# Deploy the 'dist' folder to GitHub Pages
```

## ♿ Accessibility

- Semantic HTML throughout
- ARIA labels where needed
- Keyboard navigation support
- Focus states on interactive elements
- `prefers-reduced-motion` support for animations

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contact

Built with care by Nikos Dimitriadis

- Email: nsdimitriadis@gmail.com
- LinkedIn: [nikos-dimitriadis](https://linkedin.com/in/nsdimitr)
- GitHub: [nikos-dimitriadis](https://github.com/nsdimitriadis)
