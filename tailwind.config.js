module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}", // ✅ Make sure it scans your code
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
}
