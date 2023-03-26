import styled, { css } from "styled-components";

type TitleProps = {
	contrast?: boolean;
	isAccent?: boolean;
};

export const Title = styled.h1<TitleProps>`
	${({ theme, isAccent, contrast }) => css`
		color: ${contrast && theme.colors.utils.accent};
		font-weight: 700;
		font-size: ${isAccent ? theme.fontSizes.large : theme.fontSizes.normal};
		@media screen and (${theme.breakpoints.default}) {
			font-size: ${isAccent ? theme.fontSizes.x_large : theme.fontSizes.large};
		}
	`}
`;
