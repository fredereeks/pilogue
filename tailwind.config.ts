import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      screen: {
        "xs": "500px",
      },
      colors: {
        primary: "#013678",
        success: "#148c1b",
        green: "#09dba0",
        danger: "#f34f7c",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter"]
  }
}
export default config
