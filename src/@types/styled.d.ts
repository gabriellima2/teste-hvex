import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		fontFamily: {
			main: string;
		};
		fontSizes: {
			x_large: string;
			large: string;
			normal: string;
			small: string;
			x_small: string;
		};
		colors: {
			main: string;
			font: {
				light: string;
				util: string;
				dark: string;
			};
			utils: {
				accent: string;
				contrast: string;
				light: string;
			};
			brand: {
				main: string;
				secondary: string;
			};
		};
		spaces: {
			1: string;
			2: string;
			3: string;
			4: string;
			5: string;
			6: string;
			7: string;
			8: string;
			9: string;
			10: string;
			11: string;
			12: string;
			13: string;
			14: string;
			15: string;
		};
		breakpoints: {
			default: string;
			medium: string;
			large: string;
		};
	}
}
