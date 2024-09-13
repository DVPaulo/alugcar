/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				DarkBlue: '#070F10',
				Yellow: '#F79F11',
				Gray: '#838485',
				Blue: '#121D36',
				White: '#FFFFFF',
				WhiteLight: '#F0F4FA'
			}
		}
	},
	plugins: []
}
