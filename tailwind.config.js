const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()], // Adjust path to match your project structure

  theme: {
    extend: {},
  },

  plugins: [flowbite.plugin()],
};
