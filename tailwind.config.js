/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			...colors
		},
		extend: {
			height: {
			},
		},
		fontFamily: {
			cairo: ['Cairo', 'sans-serif'],
		},
		screens: {
			xs:{max:'640px'},
			sm: { min: '640px', max: '767px' },
			md: { min: '768px', max: '1023px' },
			lg: { min: '1024px', max: '1279px' },
			xl: { min: '1280px', max: '1535px' },
			'2xl': { min: '1536px' },
		},
	},
	plugins: [],
};
