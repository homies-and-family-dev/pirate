/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "var(--gold)",
        silver: "var(--silver)",
        "dark-gold": "var(--dark-gold)",
        "dark-silver": "var(--dark-silver)",
      },
      fontFamily: {
        pirate: ["var(--font-pirate)"],
      },
      animation: {
        'wave': 'wave 10s linear infinite',
        'wave-flag': 'waveFlag 2s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        waveFlag: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' }
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      },
    },
  },
  plugins: [],
}; 