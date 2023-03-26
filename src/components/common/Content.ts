import styled, { css } from "styled-components";

export const Content = styled.div`
	${({ theme }) => css`
		padding: 20px;
		@media screen and (${theme.breakpoints.medium}) {
			max-width: 1200px;
		}
	`}
`;
