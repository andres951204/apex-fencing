/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        RivieraNightsTrialExtraLight: ["RivieraNightsTrialExtraLight"],
        RivieraNightsBlack: [" RivieraNightsTrialblack"],
        RivieraNightsBold: ["RivieraNightsTrialBold"],
        RivieraNightsLight: ["RivieraNightsTrialLight "],
        RivieraNightsMedium: ["RivieraNightsTrialMedium"],
        RivieraNightsRegular: ["RivieraNightsTrialRegular"],
        plusJarka: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        melonseed: "#32281f",
        darkGray: "#a8a9ad4d",
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
    },
  },
  plugins: [],
};
