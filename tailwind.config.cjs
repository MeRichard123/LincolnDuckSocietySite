/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'duckPattern': "url('/assets/feet.svg')"
			}
		},
		colors: {
			'dark': '#232222',
			'white': '#fff',
			'offWhite': 'hsl(10, 21%, 95%)'
		},
		fontFamily: {
			'cormorant': ['Cormorant Garamond', 'serif'],
			'merriweather': ['Merriweather', 'serif'],
			'montserrat': ['Montserrat', 'sans-serif'],
		}
	},
	plugins: [],
}
