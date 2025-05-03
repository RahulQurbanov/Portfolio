module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        keyframes: {
          flash: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0.3' },
          },
        },
        animation: {
          flash: 'flash 1.5s ease-in-out infinite',
        },
      }      
    },
    plugins: [],
  }
  