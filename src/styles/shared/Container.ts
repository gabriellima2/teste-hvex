import styled, { css } from "styled-components";

export const Container = styled.div`
	${({ theme }) => css`
		padding: 20px;
		@media screen and (${theme.breakpoints.medium}) {
			max-width: 1140px;
		}
	`}
`;
