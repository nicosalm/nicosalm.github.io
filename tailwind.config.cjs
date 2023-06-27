/*@type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				day: {
					...require('daisyui/src/colors/themes')['[data-theme=cupcake]'],
					'.sidebar': {
						'background-color': '#F9FAFB',
					},
				},

				
				night: {
					...require('daisyui/src/colors/themes')['[data-theme=night]'],
					'.sidebar': {
						'background-color': 'hsl(var(--b2))',
					},
				},
			},
		],
	},
};	