import styled, { css } from "styled-components";

export const Card = styled.div`
	${({ theme }) => css`
		width: 100%;
		height: 100%;
		max-width: 242px;
		min-height: 248px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: ${theme.spaces[5]};
		font-size: ${theme.fontSizes.normal};
		color: ${theme.colors.brand.secondary};
		font-weight: 700;
		border-radius: 10px;
		padding: ${theme.spaces[9]} ${theme.spaces[5]};
		border: 1px solid ${theme.colors.brand.secondary};
		background-color: ${theme.colors.utils.accent};
		@media screen and (${theme.breakpoints.default}) {
			width: 242px;
			height: 248px;
		}
	`}
`;
