

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-0": "var(--base-0)",
        "base-10": "var(--base-10)",
        "base-20": "var(--base-20)",
        "base-30": "var(--base-30)",
        "base-40": "var(--base-40)",
        "base-5": "var(--base-5)",
        "base-50": "var(--base-50)",
        "base-60": "var(--base-60)",
        "base-70": "var(--base-70)",
        "base-80": "var(--base-80)",
        "base-90": "var(--base-90)",
        "red-10-duplicate": "var(--red-10-duplicate)",
        "red-20-duplicate": "var(--red-20-duplicate)",
        "red-30-duplicate": "var(--red-30-duplicate)",
        "red-40-duplicate": "var(--red-40-duplicate)",
        "red-5-duplicate": "var(--red-5-duplicate)",
        "red-50-duplicate": "var(--red-50-duplicate)",
        "red-60-duplicate": "var(--red-60-duplicate)",
        "red-70-duplicate": "var(--red-70-duplicate)",
        "red-80-duplicate": "var(--red-80-duplicate)",
        "red-90-duplicate": "var(--red-90-duplicate)",
        "red-base-duplicate": "var(--red-base-duplicate)",
        "yellow-base": "var(--yellow-base)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "body-m-italic": "var(--body-m-italic-font-family)",
        "body-m-medium": "var(--body-m-medium-font-family)",
        "body-m-regular": "var(--body-m-regular-font-family)",
        "body-s-italic": "var(--body-s-italic-font-family)",
        "body-s-medium": "var(--body-s-medium-font-family)",
        "body-s-regular": "var(--body-s-regular-font-family)",
        "caption-italic": "var(--caption-italic-font-family)",
        "caption-italic-stikethrough":
          "var(--caption-italic-stikethrough-font-family)",
        "caption-medium": "var(--caption-medium-font-family)",
        "caption-medium-stikethrough":
          "var(--caption-medium-stikethrough-font-family)",
        "caption-regular-none": "var(--caption-regular-none-font-family)",
        "caption-regular-stikethrough":
          "var(--caption-regular-stikethrough-font-family)",
        h2: "var(--h2-font-family)",
        h3: "var(--h3-font-family)",
        h4: "var(--h4-font-family)",
        h5: "var(--h5-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
  





