/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.html",                     // Your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}" ,       // All JS, TS, JSX, TSX files in src
    "./components/**/*.{js,ts,jsx,tsx}"
    // Add any other paths where you use Tailwind classes
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
        sans: ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'], // Default to mono for programming theme
      },
      colors: {
        // Light "Programming" Theme
        'code-bg': '#FFFFFF', // Clean white background
        'code-bg-secondary': '#F6F8FA', // Slightly off-white for cards/secondary areas
        'code-text-primary': '#24292F', // Dark gray for primary text
        'code-text-secondary': '#57606A', // Medium gray for secondary text
        'code-text-on-accent': '#FFFFFF', // White text on vibrant accents
        'code-border': '#D0D7DE', // Light gray border
        'code-accent-keyword': '#005CC5', // Professional blue (like keywords in themes)
        'code-accent-string': '#032F62', // Darker blue/greenish (like strings)
        'code-accent-variable': '#E36209', // Orange (like variables/constants)
        'code-accent-comment': '#6A737D', // Muted gray (like comments)

        // Dark "Programming" Theme
        'dark-code-bg': '#0D1117', // Very dark (GitHub dark mode style)
        'dark-code-bg-secondary': '#161B22', // Slightly lighter dark for cards
        'dark-code-text-primary': '#C9D1D9', // Light gray/off-white for primary text
        'dark-code-text-secondary': '#8B949E', // Medium light gray for secondary text
        'dark-code-text-on-accent': '#FFFFFF', // White text on vibrant accents
        'dark-code-border': '#30363D', // Dark border
        'dark-code-accent-keyword': '#58A6FF', // Vibrant blue
        'dark-code-accent-string': '#79C0FF',  // Lighter blue/greenish
        'dark-code-accent-variable': '#FFA726',// Soft orange
        'dark-code-accent-comment': '#8B949E', // Lighter muted gray for comments on dark
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out both', // Changed 'forwards' to 'both'
        'cursor-blink': 'cursorBlink 1s step-end infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' }, // Slightly less Y
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      boxShadow: {
        // Flatter shadows for programming theme
        'code-subtle': '0 1px 2px 0 rgba(0,0,0,0.03)',
        'code-card': '0 0 0 1px theme(colors.code-border)', // Border-like shadow for light
        'dark-code-subtle': '0 1px 2px 0 rgba(255,255,255,0.02)',
        'dark-code-card': '0 0 0 1px theme(colors.dark-code-border)', // Border-like shadow for dark
      },
      typography: (theme) => ({ // For styling HTML content in modal
        DEFAULT: {
          css: {
            color: theme('colors.code-text-secondary'),
            a: {
              color: theme('colors.code-accent-keyword'),
              '&:hover': {
                color: theme('colors.code-accent-keyword'),
                opacity: 0.8,
              },
            },
            strong: {
                color: theme('colors.code-text-primary'),
            },
            h1: { color: theme('colors.code-text-primary') },
            h2: { color: theme('colors.code-text-primary') },
            h3: { color: theme('colors.code-text-primary') },
            h4: { color: theme('colors.code-accent-comment') }, // Match existing section sub-titles
            // Add more styles as needed for prose elements
          },
        },
        invert: { // For dark mode
              css: {
                color: theme('colors.dark-code-text-secondary'),
                  a: {
                    color: theme('colors.dark-code-accent-keyword'),
                    '&:hover': {
                        color: theme('colors.dark-code-accent-keyword'),
                        opacity: 0.8,
                    },
                },
                strong: {
                    color: theme('colors.dark-code-text-primary'),
                },
                h1: { color: theme('colors.dark-code-text-primary') },
                h2: { color: theme('colors.dark-code-text-primary') },
                h3: { color: theme('colors.dark-code-text-primary') },
                h4: { color: theme('colors.dark-code-accent-comment') },
            // Add more styles as needed for prose elements
            },
        }
      }),
    }
  },
  plugins: [],
}

