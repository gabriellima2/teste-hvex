import styled, { css } from "styled-components";

export const WhiteBgColor = styled.div`
	${({ theme }) => css`
		padding: ${theme.spaces[15]} 0px;
		background-color: ${theme.colors.utils.light};
	`}
`;
