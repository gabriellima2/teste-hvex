import { DefaultTheme } from "styled-components";
import { WIDTHS_OF_DEVICES } from "@/constants/widths-of-devices";

export const theme: DefaultTheme = {
	fontFamily: {
		main: "'Inter', sans-serif",
	},
	fontSizes: {
		x_large: "3rem",
		large: "2rem",
		normal: "1.5rem",
		small: "1.25rem",
		x_small: "1rem",
	},
	colors: {
		main: "#1B2033",
		brand: {
			main: "#00B6DE",
			secondary: "#52E0FF",
			util: "#036FC0",
		},
		font: {
			light: "#FDFDFD",
			util: "#115678",
			dark: "#373737",
		},
		utils: {
			accent: "#1C2C44",
			contrast: "#252835",
			light: "#FDFDFD",
		},
	},
	spaces: {
		1: "4px",
		2: "8px",
		3: "12px",
		4: "16px",
		5: "20px",
		6: "24px",
		7: "28px",
		8: "32px",
		9: "36px",
		10: "40px",
		11: "44px",
		12: "48px",
		13: "52px",
		14: "56px",
		15: "60px",
	},
	breakpoints: {
		default: `(min-width: ${WIDTHS_OF_DEVICES.default}px)`,
		medium: `(min-width: ${WIDTHS_OF_DEVICES.medium}px)`,
		large: `(
			max-width: ${WIDTHS_OF_DEVICES.medium}px
			&& min-width: ${WIDTHS_OF_DEVICES.large}px
		)`,
	},
};
