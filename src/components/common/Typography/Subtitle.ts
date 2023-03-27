import styled, { css } from "styled-components";
import type { Modifiers } from "@/@types/Modifiers";

type SubtitleProps = {
	accent?: boolean;
};

type SubtitleVariants = keyof Pick<SubtitleProps, "accent">;

const modifiers: Modifiers<SubtitleVariants> = {
	accent: (theme) => css`
		color: ${theme.colors.brand.secondary};
	`,
};

export const Subtitle = styled.h2<SubtitleProps>`
	${({ theme, accent }) => css`
		color: ${theme.colors.utils.accent};
		${accent && modifiers.accent(theme)}
	`}
`;
