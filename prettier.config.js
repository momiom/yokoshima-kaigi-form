/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  semi: false,
  singleQuote: true,
  printWidth: 100,
};

export default config;
