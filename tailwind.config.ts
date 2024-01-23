import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				textSoft: "#e5e5e5",
				btn: "#3673fd",
				main: "#0d0c22",
			},
			backgroundColor: {
				main: "#0d0c22",
				sub: "#2d2b42",
			},
			width: {
				main: "1510px",
			},
		},
	},
	plugins: [],
};
export default config;
