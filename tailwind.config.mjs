/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      body: ["printvetica", "ui-sans-serif", "system-ui", "-apple-system", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      sans: ["printvetica", "ui-sans-serif", "system-ui", "-apple-system", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
    },
    extend: {
      colors: {
        vox: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#2b2b2b", // main
        },
        red: {
          50: "#fff1ef",
          100: "#ffe1dc",
          200: "#ffc8bf",
          300: "#ffa192",
          400: "#ff6c54",
          500: "#ff3e1f",
          600: "#ff2400",
          700: "#db1f00",
          800: "#c11b00", // main
          900: "#941c08",
          950: "#520b00",
        },
        orange: {
          50: "#fff8eb",
          100: "#fff0cf",
          200: "#ffdd9f",
          300: "#ffc262",
          400: "#ff9a23",
          500: "#ff7b00",
          600: "#ff5c00",
          700: "#da4200",
          800: "#bb3800", // main
          900: "#8a2d04",
          950: "#4b1300",
        },
        green: {
          50: "#f3faf9",
          100: "#d7f0f0",
          200: "#afe0e0",
          300: "#7fc7c9",
          400: "#55a7ac",
          500: "#3b8a91",
          600: "#2d6d74",
          700: "#27595e",
          800: "#23474c",
          900: "#234044", // main
          950: "#0e2225",
        },
        earth: {
          50: "#f5f3f1",
          100: "#e5e2dc",
          200: "#cdc7bb",
          300: "#b0a594",
          400: "#998a76",
          500: "#8b7b69", // main
          600: "#766558",
          700: "#5f5149",
          800: "#524641",
          900: "#493e3a",
          950: "#282120",
        },
        air: {
          50: "#f8f6f4",
          100: "#efeae5",
          200: "#d9ccc1", // main
          300: "#c9b6a8",
          400: "#b39584",
          500: "#a37e6c",
          600: "#966e60",
          700: "#7d5b51",
          800: "#674b45",
          900: "#543f3a",
          950: "#2c201e",
        },
      },
    },
  },
  plugins: [],
}
