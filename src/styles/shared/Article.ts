import styled, { css } from "styled-components";

export const Article = styled.article`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: ${theme.spaces[5]};
	`}
`;
