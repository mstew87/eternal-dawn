import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ETD Brand Colors based on logo
        brand: {
          primary: '#FF4500',    // Fiery orange-red (main glow)
          secondary: '#FF6B35',  // Lighter orange-red
          accent: '#FF8C00',     // Bright orange highlight
          dark: '#8B0000',       // Deep crimson
          purple: '#DDA0DD',     // Purple accent
          'purple-dark': '#9370DB', // Darker purple
        },
        // Background colors
        background: {
          primary: '#0A0A0A',    // Deep black
          secondary: '#1A1A1A',  // Dark gray
          tertiary: '#2D2D2D',   // Medium gray for UI
        },
        // Text colors
        text: {
          primary: '#FFFFFF',     // White
          secondary: '#E5E5E5',  // Light gray
          muted: '#A0A0A0',      // Muted gray
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config; 