module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8', // 파란색 기본 색상
        secondary: '#4b5563', // 회색 기본 색상
      },
      spacing: {
        '18': '4.5rem', // 72px
      },
      borderRadius: {
        xl: '1.25rem', // 20px
      },
    },
  },
  plugins: [],
};
