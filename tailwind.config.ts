import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        pearl: '#FAFAFA',
        ink: '#111111',
        slate: '#555555',
        cobalt: '#2563EB',
      },
    },
  },
  plugins: [],
}

export default config
