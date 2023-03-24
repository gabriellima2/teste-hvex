import Link from "next/link";
import styled, { css } from "styled-components";

type BaseLinkProps = {
	onlyBorder: boolean;
};

export const BaseLink = styled(Link)<BaseLinkProps>`
	${({ theme, onlyBorder }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 170px;
		min-height: 50px;
		border: 1px solid ${theme.colors.brand.main};
		padding: 14px ${theme.spaces[5]};
		cursor: pointer;
		border-radius: 5px;
		font-weight: ${onlyBorder ? 400 : 500};
		background-color: ${onlyBorder ? "none" : theme.colors.brand.main};
		transition: background 0.2s ease;
		&:hover,
		&:focus {
			background: ${onlyBorder ? theme.colors.brand.main : "none"};
		}
	`}
`;
