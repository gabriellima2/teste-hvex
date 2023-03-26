import styled, { css } from "styled-components";

export const Line = styled.span`
	${({ theme }) => css`
		display: block;
		width: 100%;
		max-width: 170px;
		height: 5px;
		background: ${theme.colors.brand.main};
	`}
`;
