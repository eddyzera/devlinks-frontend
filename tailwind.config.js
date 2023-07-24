/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': 'var(--purple-900)',
        'middle-purple': 'var(--purple-200)',
        'light-purple': 'var(--purple-100)',
        'dark-gray': 'var(--gray-900)',
        'middle-gray': 'var(--gray-800)',
        'light-gray': 'var(--gray-500)',
        gray: 'var(--gray-100)',
        white: 'var(--white)',
        'dark-red': 'var(--red-900)',
      },
      borderRadius: {
        'radius-md': 'var(--radius-md)',
      },
      boxShadow: {
        'shadow-md': 'var(--shadow-md)',
      },
      fontSize: {
        'text-12': 'var(--text-sm)',
        'text-16': 'var(--text-md)',
        'text-32': 'var(--text-lg)',
      },
      lineHeight: {
        'line-150': 'var(--line-height)',
      },

      maxWidth: {
        'max-w-482': 'var(--max-w-sm)',
        'max-w-546': 'var(--max-w-md)',
      },
    },
  },
  plugins: [],
}
