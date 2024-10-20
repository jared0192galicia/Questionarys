// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: 'var(--background)',
//         foreground: 'var(--foreground)',
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        valera: ['font-valera', 'ValeraRound'],
        jaldi: ['font-jaldi', 'Jaldi'],
        noto: ['font-noto', 'NotoSans'],
        notoLight: ['font-notoLight', 'NotoSansLight']
      },
      colors: {
        'dirty-white': '#F5F8FB',
        'preslow-gray': '#012957',
        'preslow-blue': '#002c55',
        'preslow-light-gray': '#c5c5c5',
        'preslow-dark-gray': '#404553',
        'preslow-soft-gray': '#f3f9ff',
        'preslow-dark-cyan': '#357A8B',
        'preslow-medium-cyan': '#4BACC6',
        'preslow-light-cyan': '#A1D8E4'
      },
      height: {
        'panel': 'calc(100vh - 135px)' // Definir el cálculo personalizado
      }
    }
  },
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        '.cyan-inputswitch.p-inputswitch-checked .p-inputswitch-slider': {
          '@apply bg-cyan-600': {}
        },
        '.cyan-inputswitch .p-inputswitch-slider:hover': {
          'background-color': '#0ea5e9  !important'
        },
        '.cyan-inputswitch.p-inputswitch-checked .p-inputswitch-slider:hover': {
          'background-color': '#155e75  !important'
        },
        // Estilo personalizado para el botón
        '.cyan-button': {
          '@apply bg-cyan-600 text-white font-bold py-2 px-4 rounded outline-none border-none':
            {}
        },
        '.cyan-button:hover': {
          'background-color': '#155e75  !important'
        },
        '.cyan-button:focus': {
          '@apply ring-2 ring-cyan-600': {}
        },

        '.dark-mode-button': {
          // '@apply bg-cyan-600 text-white font-bold py-2 px-4 rounded outline-none border-none': {},
          'background-color': '#155e75  !important'
        },
        '.light-mode-button': {
          // '@apply bg-cyan-600 text-white font-bold py-2 px-4 rounded outline-none border-none': {},
          'background-color': '#FFF  !important'
        }
        // '.cyan-button:hover': {
        //   'background-color': '#155e75  !important',
        // },
        // '.cyan-button:focus': {
        //   '@apply ring-2 ring-cyan-600': {},
        // },
      });
    }
  ],
  corePlugins: {
    preflight: false
  }
};
