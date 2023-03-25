import styled, { css } from "styled-components";

type BaseLinkProps = {
	hasBorder?: boolean;
};

export const BaseLink = styled.a<BaseLinkProps>`
	${({ theme, hasBorder = false }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 170px;
		min-height: 50px;
		border: 1px solid ${theme.colors.brand.main};
		padding: 14px ${theme.spaces[5]};
		cursor: pointer;
		border-radius: 5px;
		font-weight: ${hasBorder ? 400 : 500};
		background-color: ${hasBorder ? "none" : theme.colors.brand.main};
		transition: background 0.2s ease;
		&:hover,
		&:focus {
			background: ${hasBorder ? theme.colors.brand.main : "none"};
		}
	`}
`;
