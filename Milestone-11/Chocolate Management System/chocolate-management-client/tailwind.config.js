/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // titleBG:
        //   "radial-gradient(126.75% 133.09% at 50% 49.99%, #DC8D48 0%, #D38745 4.19%, #91572B 36.95%, #5E3116 66.01%, #3F1A0A 87.87%, #331105 100%);",
      },
    },
  },
  plugins: [require("daisyui")],
};
