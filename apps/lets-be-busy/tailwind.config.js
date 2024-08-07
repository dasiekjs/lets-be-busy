const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        danger: '#eb2525',
        warning: '#ebd125',
        success: '#3feb25',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
};
