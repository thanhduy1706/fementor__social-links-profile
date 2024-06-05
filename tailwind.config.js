/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green": "hsl(75, 94%, 57%)",
        "grey": "hsl(0, 0%, 20%)",
        "dark-grey": "hsl(0, 0%, 12%)",
        'off-black':"hsl(0, 0%, 8%)"
      },
      fontWeight: {
        heading: "700",
        body: "600",
        text: "400",
      },
      screens: {
        sm: "375px",
        lg: "1440px",
      },
    },
  },
  plugins: [],
}
