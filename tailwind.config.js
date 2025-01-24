const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()], // Adjust path to match your project structure

  theme: {
    extend: {
      colors: {
        navBar:{
          bg: "#555085",
          btn: "#FD3995"
        }
      },
    },
  },

  plugins: [flowbite.plugin()],
};
