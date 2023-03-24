import styled, { css } from "styled-components";

type ParagraphProps = {
	withMainColor?: boolean;
};

export const Paragraph = styled.p<ParagraphProps>`
	${({ theme, withMainColor = true }) => css`
		color: ${withMainColor ? theme.colors.font.light : theme.colors.font.dark};
		font-size: ${theme.fontSizes.x_small};
		@media screen and (${theme.breakpoints.default}) {
			font-size: ${theme.fontSizes.small};
		}
	`}
`;
