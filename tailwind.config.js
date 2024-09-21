/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blackdark: {
        '50': '#f5f5f6',
        '100': '#e5e5e8',
        '200': '#cfd0d2',
        '300': '#adafb3',
        '400': '#83848d',
        '500': '#686972',
        '600': '#595961',
        '700': '#4c4d52',
        '800': '#434347',
        '900': '#3b3b3e',
        '950': '#1b1b1d',
    },
    lightgray: {
        '50': '#f6f7f8',
        '100': '#eeeff1',
        '200': '#dbdde2',
        '300': '#c3c7cd',
        '400': '#a5aab5',
        '500': '#8f94a2',
        '600': '#7e8292',
        '700': '#717484',
        '800': '#5f626e',
        '900': '#4e505a',
        '950': '#323339',
    },
    
    
      },
    },
  },
  plugins: [],
};
