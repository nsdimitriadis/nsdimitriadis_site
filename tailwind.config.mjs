import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#8B5CF6',
        'neon-pink': '#EC4899',
        'neon-blue': '#3B82F6',
        'silver': '#C0C0C0',
        'dark-gray': '#1A1A1A',
        'medium-gray': '#2D2D2D'
      },
      fontFamily: {
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' }
        }
      },
      typography: {
        invert: {
          css: {
            '--tw-prose-body': '#E5E5E5',
            '--tw-prose-headings': '#FFFFFF',
            '--tw-prose-lead': '#C0C0C0',
            '--tw-prose-links': '#8B5CF6',
            '--tw-prose-bold': '#FFFFFF',
            '--tw-prose-counters': '#C0C0C0',
            '--tw-prose-bullets': '#6B7280',
            '--tw-prose-hr': '#374151',
            '--tw-prose-quotes': '#F3F4F6',
            '--tw-prose-quote-borders': '#8B5CF6',
            '--tw-prose-captions': '#6B7280',
            '--tw-prose-code': '#FFFFFF',
            '--tw-prose-pre-code': '#E5E5E5',
            '--tw-prose-pre-bg': '#1A1A1A',
            '--tw-prose-th-borders': '#374151',
            '--tw-prose-td-borders': '#2D2D2D'
          }
        }
      }
    }
  },
  plugins: [typography]
};
