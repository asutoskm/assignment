import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '20': '20px',
      },
      fontFamily: {
        default: ['Inter', 'sans-serif'],
        'neue-haas-grotesk': ['"Neue Haas Grotesk Display Pro"', 'sans-serif'],
      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(111deg, #9F8BFF 0%, #7053FF 100%)',
        'asset-card-gradient': 'linear-gradient(180deg, #9f8bff80 0%, #7053FF 100%)',
        'input-highlight': 'linear-gradient(180deg, #363636, #363636, #7F43FF)',
        'input-error': 'linear-gradient(180deg, #363636, #363636,  #ED4A58)',
        'button-gradient-hover': 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(111deg, #9F8BFF 0%, #7053FF 100%)',
      },
      animation: {
        shine: "shine 5s cubic-bezier(0.4, 0, 0.2, 1) infinite",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
      transitionTimingFunction: {
        'extreme-bouncy': 'cubic-bezier(0.215, 0.610, 0.355, 1.00)',
      },
    },
    boxShadow: {
      default: '0px 0px 1px 0px rgba(128, 128, 128, 0.20), 0px 2px 30px 0px rgba(128, 128, 128, 0.08), 0px 0px 15px 0px rgba(128, 128, 128, 0.03)',
      'box-shadowbutton': '0px 0px 14px 0px rgba(255, 255, 255, 0.25) inset',
    },
    colors: {
      transparent: 'transparent', // rgb(0, 0, 0, 0)
      white: '#ffffff', // rgb(255, 255, 255),
      dark: {
        'surface-700': '#333331',
        'surface-800':'#252622'
      },
      positive: {
        400: "#45A666",
      },
      negative: {
        400: "#A63030",
      },

      light: {
        primary: '#FAFAFA', // rgb(250, 250, 250)
        secondary: "#808080", // rgb(128, 128, 128);
        hightlight: "#7F43FF",
        'surface-125': "#F2F2F2",
        border: "#9F8BFF",

      },
      alpha: {
        light8: '#FAFAFA', // rgb(250, 250, 250)
      },
      background: {
        default: '#101010', // rgb(16, 16, 16)
        transparent: 'transparent', // rgb(0, 0, 0, 0)
        card: '#1A1A1A', // rgb(26, 26, 26)
      },
      text: {
        light: {
          secondary: '#FAFAFA', // rgb(250, 250, 250)
          footer: "#808080" // rgb(128, 128, 128)
        },
        default: '#101010',
      },
      button: {
        primary: "#9F8BFF", // rgb(159, 139, 255)
      },
      border: {
        default: '#1C8080', // rgb(28, 128, 128)
      },
    },


  },
  plugins: [],
};
export default config;