import styled, { css, CSSProperties } from "styled-components";

type CenterProps = Pick<CSSProperties, "flexDirection">;

export const Center = styled.div<CenterProps>`
	${({ theme, flexDirection }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: ${flexDirection};
		gap: ${theme.spaces[14]};
	`}
`;
