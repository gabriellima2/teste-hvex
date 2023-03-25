import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html,
	body {
		overflow-x: hidden;
	}
	body {
		font-family: ${theme.fontFamily.main};
		color: ${theme.colors.font.light};
		background: ${theme.colors.main};
	}
	h1 {
		font-weight: 700;
		font-size: ${theme.fontSizes.large};
		@media screen and (${theme.breakpoints.default}) {
			font-size: ${theme.fontSizes.x_large};
		}
	}
	h2 {
		font-weight: 700;
		font-size: ${theme.fontSizes.normal};
		@media screen and (${theme.breakpoints.default}) {
			font-size: ${theme.fontSizes.large};
		}
	}
	p {
		font-size: ${theme.fontSizes.x_small};
		@media screen and (${theme.breakpoints.default}) {
			font-size: ${theme.fontSizes.small};
		}
	}
	li {
		list-style: none;
		color: ${theme.colors.font.light};
		font-size: ${theme.fontSizes.x_small};
		@media screen and (${theme.breakpoints.default}) {
			font-size: ${theme.fontSizes.small};
		}
	}
	a {
		text-decoration: none;
		color: ${theme.colors.font.light};
	}
`}
`;
