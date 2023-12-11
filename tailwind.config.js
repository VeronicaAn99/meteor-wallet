module.exports = {
  purge: [
    './client/**/*.html', // all HTML files inside the client folder
    './client/**/*.jsx',  // all JSX files inside the client folder
    './imports/**/*.js',  // all JS files inside the imports folder
    './imports/**/*.jsx', // all JSX files inside the imports folder
    // Include additional paths as needed
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Extend the default Tailwind colors, spacing, etc.
      colors: {
        'custom-blue': '#243c5a',
        'custom-red': '#ff0000',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  variants: {
    extend: {
      // Extend the variants provided by Tailwind
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    },
  },
  plugins: [
    // Add any plugins here
    // require('@tailwindcss/forms'),
  ],
};
