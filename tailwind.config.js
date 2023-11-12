/** @type {import('tailwindcss').Config} */

export default {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        "riviera-extra-light": ["RivieraNightsTrialExtraLight"],
        "riviera-black": [" RivieraNightsTrialBlack"],
        "riviera-bold": ["RivieraNightsTrialBold"],
        "riviera-light": ["RivieraNightsTrialLight "],
        "riviera-medium": ["RivieraNightsTrialMedium"],
        "riviera-regular": ["RivieraNightsTrialRegular"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        kl: {
          greige: "#EEE4DB",
          purple: "#695978",
          cooper: "#AA6627",
          olive: "#5A623D",
          silver: "#E5E5E6",
          black: "#252525",
          white: "#FCFCFA",
          "melon-seed": "#32281F",
        },
        texture: {
          black: "#282828",
          bronze: "#978D8D",
          white: "#FFF",
          "matte-black": "#2D2D2D",
          "oil-rubbed-bronze": "#978D8D",
          "matte-white": "#FFF",
        },
      },
      screens: {
        xs: "340px",
        // => @media (min-width: 340px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        "hero-horizontal-cable-railings":
          "url('/images/HeroHorizontalCableRailing.webp')",
        "hero-home": "url('/images/hero-bg-image.webp')",
      },
      maxWidth: {
        default: "1180px",
      },
    },
  },
  plugins: [],
};
