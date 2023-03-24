import styled, { css, CSSProperties } from "styled-components";

type CenterProps = Pick<CSSProperties, "flexDirection">;

export const Center = styled.div<CenterProps>`
	${(props) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: ${props.flexDirection};
	`}
`;
