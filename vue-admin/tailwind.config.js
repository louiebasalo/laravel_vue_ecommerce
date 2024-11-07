/** @type {import('tailwindcss').Config} */

 import forms from 'tailwindcss'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}"
      ],
    theme: {
        extend: {},
    },
    plugins: [
        forms
    ],
}

// module.exports = {
//     content: [
//         "./index.html",
//         "./src/**/*.{js,ts,jsx,tsx,vue}"
//       ],
//     theme: {
//         extend: {},
//     },
//     plugins: [
//         require('@tailwindcss/forms'),
//     ],
// }
