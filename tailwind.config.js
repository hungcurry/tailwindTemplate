module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,vue}"],
  // 白名單
  safelist: [
    'bg-red-500',
    'text-3xl',
    'lg:text-4xl',
  ],
  darkMode: 'class', // 'media自動' or 'class手動'
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          // sm: '1.5rem',
          // lg: '2rem',
        },
      },
      colors: {
        'primary': '#4f3cc9',
        'primary-dark': '#4232aa',
        'secondary': '#ffffff'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  // 預設base關掉
  // corePlugin: {
  //   preflight: false,
  // }
}
