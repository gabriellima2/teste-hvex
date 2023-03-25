import styled, { css, type CSSProperties } from "styled-components";

type SubInfoSectionProps = Pick<CSSProperties, "order" | "flexDirection">;

export const SubInfoSection = styled.section<SubInfoSectionProps>`
	${({ theme, order, flexDirection }) => css`
		width: 100%;
		flex: 1;
		order: ${order ?? 0};
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-direction: ${flexDirection ?? "column"};
		gap: ${theme.spaces[12]};
	`}
`;
