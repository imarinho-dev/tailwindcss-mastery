/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html'],
	theme: {
		debugScreens: {
			position: ['bottom', 'left'],
		},
		extend: {},
	},
	plugins: [require('tailwindcss-debug-screens')],
};
