import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body {
		font-family: ${theme.fontFamily.main};
		color: ${theme.colors.font.light};
		background: ${theme.colors.main};
	}
	h1 {
		font-size: ${theme.fontSizes.x_large};
		font-weight: 700;
	}
	h2 {
		font-size: ${theme.fontSizes.large};
		font-weight: 700;
	}
	p {
		font-size: ${theme.fontSizes.small};
	}
	li {
		list-style: none;
		color: ${theme.colors.font.light};
	}
	a {
		text-decoration: none;
		color: ${theme.colors.font.light};
	}
`}

`;
