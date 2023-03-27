import { Modifiers } from "@/@types/Modifiers";
import styled, { css } from "styled-components";

type ParagraphProps = {
	secondaryColor?: boolean;
};

type ParagraphVariants = keyof Pick<ParagraphProps, "secondaryColor">;

const modifiers: Modifiers<ParagraphVariants> = {
	secondaryColor: (theme) => css`
		color: ${theme.colors.font.dark};
	`,
};

export const Paragraph = styled.p<ParagraphProps>`
	${({ theme, secondaryColor }) => css`
		color: ${theme.colors.font.light};
		${secondaryColor && modifiers.secondaryColor(theme)};
	`}
`;
