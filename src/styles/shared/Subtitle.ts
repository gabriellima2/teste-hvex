import styled, { css } from "styled-components";

type SubtitleProps = {
	isAccent?: boolean;
};

export const Subtitle = styled.h2<SubtitleProps>`
	${({ theme, isAccent }) => css`
		color: ${isAccent ? theme.colors.brand.main : theme.colors.font.util};
	`}
`;
