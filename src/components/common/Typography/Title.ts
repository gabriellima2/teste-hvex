import styled, { css } from "styled-components";
import type { Modifiers } from "@/@types/Modifiers";

type TitleProps = {
	contrast?: boolean;
	isDisplay?: boolean;
};

type TitleVariants = keyof Pick<TitleProps, "contrast" | "isDisplay">;

const modifiers: Modifiers<TitleVariants> = {
	contrast: (theme) => css`
		color: ${theme.colors.utils.accent};
	`,
	isDisplay: (theme) => css`
		font-size: ${theme.fontSizes.large};
		@media screen and (${theme.breakpoints.default}) {
			font-size: ${theme.fontSizes.x_large};
		}
	`,
};

export const Title = styled.h1<TitleProps>`
	${({ theme, isDisplay, contrast }) => css`
		font-weight: 700;
		font-size: ${theme.fontSizes.normal};
		@media screen and (${theme.breakpoints.default}) {
			font-size: ${theme.fontSizes.large};
		}
		${contrast && modifiers.contrast(theme)};
		${isDisplay && modifiers.isDisplay(theme)};
	`}
`;
