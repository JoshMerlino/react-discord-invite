module.exports = {
	content: [
		"./index.html",
		"./app/**/*.{vue,js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				primary: {
					"500": "#3ba560",
					"600": "#2f844c",
					"700": "#266b3e"
				},
				accent: {
					"500": "#5865f2",
					"600": "#3948ef",
					"700": "#2a3aee"
				}
			}
		},
		screens: {
			md: "500px"
		}
	}
};
