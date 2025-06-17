/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,svx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // ... existing theme extensions ...
    },
  },
  plugins: [
    // ... existing plugins ...
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-custom': {
          /* Firefox */
          'scrollbar-width': 'thin',
          'scrollbar-color': 'rgb(168 162 158) rgb(231 229 228)', /* stone-400 stone-200 */
          /* WebKit */
          '&::-webkit-scrollbar': {
            width: '0.5rem',
          },
          '&::-webkit-scrollbar-track': {
            'background-color': 'rgb(231 229 228)', /* stone-200 */
            'border-radius': '9999px',
          },
          '&::-webkit-scrollbar-thumb': {
            'background-color': 'rgb(168 162 158)', /* stone-400 */
            'border-radius': '9999px',
            '&:hover': {
              'background-color': 'rgb(120 113 108)', /* stone-500 */
            },
          },
        },
        '.dark .scrollbar-custom': {
          /* Firefox */
          'scrollbar-color': 'rgb(87 83 78) rgb(41 37 36)', /* stone-600 stone-800 */
          /* WebKit */
          '&::-webkit-scrollbar-track': {
            'background-color': 'rgb(41 37 36)', /* stone-800 */
          },
          '&::-webkit-scrollbar-thumb': {
            'background-color': 'rgb(87 83 78)', /* stone-600 */
            '&:hover': {
              'background-color': 'rgb(120 113 108)', /* stone-500 */
            },
          },
        },
      });
    },
  ],
};