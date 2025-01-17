module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        Bg: '#0A0A0A',
        Accent: '#836EF9',
        Dark: '#1E1E1E',
        LightPurple: '#A78BFA',
        Pink: '#EC4899',
        White: '#FFFFFF',
        Black: '#000000',
        Gray: '#2D2D2D',
        Horn: '#aa3636'
      },
      boxShadow: {
        glow: '0 0 8px rgba(131, 110, 249, 0.6)',
      },
      fontFamily: {
        shareTechMono: ['"Share Tech Mono"', 'monospace'],
        orbitron: ['Orbitron', 'sans-serif'],
        teko: ["Teko", "sans-serif"],
        exo2: ['"Exo 2"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
