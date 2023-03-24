import styled, { css } from "styled-components";

type SubtitleProps = {
	withMarginBottom?: boolean;
	isAccent?: boolean;
};

export const Subtitle = styled.h2<SubtitleProps>`
	${({ theme, withMarginBottom = true, isAccent }) => css`
		color: ${isAccent ? theme.colors.brand.main : theme.colors.font.util};
		margin-bottom: ${withMarginBottom && theme.spaces[7]};
	`}
`;
