/** @type {import('tailwindcss').Config} */

const COLORS = require("./constants/themeColors");

module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                ...COLORS,
            },
            // textColor: {},
            gradientColorStops: {},
            fontSize: {
                xs: "12px",
                sm: "14px",
                base: "16px",
                lg: "12px",
                xl: "14px",
                "2xl": "16px",
                "3xl": "18px",
                "4xl": "20px",
                "5xl": "24px",
            },
            fontFamily: {
                "poppins-regular": ["PoppinsRegular"],
                "poppins-medium": ["PoppinsMedium"],
                "poppins-semibold": ["PoppinsSemiBold"],
            },
            height: {
                "11/12": "91.666667%",
                4.5: "18px",
                13: "52px",
                15: "60px",
            },
            width: {
                4.5: "18px",
                13: "52px",
                15: "60px",
            },
        },
    },
    plugins: [],
    safelist: [
        {
            pattern: /(bg|text|border)-ink-invert/,
        },
        {
            pattern: /(bg|text|border)-blue-(darker|lighter)/,
        },
        "bg-input-bg",
        "bg-blue-darker",
        "blue-darker",
        "bg-schedule-bg",
        "schedule-bg",
    ],
};
