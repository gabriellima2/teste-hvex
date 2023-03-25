import styled, { css } from "styled-components";

type ParagraphProps = {
	secondaryColor?: boolean;
};

export const Paragraph = styled.p<ParagraphProps>`
	${({ theme, secondaryColor = false }) => css`
		color: ${secondaryColor ? theme.colors.font.dark : theme.colors.font.light};
	`}
`;
