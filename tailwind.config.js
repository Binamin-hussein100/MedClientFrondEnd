// const flowbite = require("flowbite-react/tailwind");
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

    // flowbite.content()

  ],
  theme: {
    extend: {},
  },
  plugins: [
    // flowbite.plugin(),
    nextui()

  ],
}