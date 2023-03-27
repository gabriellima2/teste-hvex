import styled, { css } from "styled-components";
import type { Modifiers } from "@/@types/Modifiers";

type BaseLinkProps = {
	border?: boolean;
	rounded?: boolean;
	text?: boolean;
};

type BaseLinkModifiers = Modifiers<
	keyof Pick<BaseLinkProps, "border" | "rounded" | "text">
>;

const modifiers: BaseLinkModifiers = {
	border: (theme) => css`
		background: none;
		font-weight: 400;
		&:hover,
		&:focus {
			background: ${theme.colors.brand.main};
		}
	`,
	rounded: () => css`
		min-width: auto;
		min-height: auto;
		border-radius: 100%;
	`,
	text: (theme) => css`
		display: inline;
		min-width: auto;
		min-height: auto;
		border: none;
		padding: 0;
		cursor: pointer;
		border-radius: 0px;
		font-weight: 400;
		background: none;
		transition: all 0.2s ease;
		font-size: ${theme.fontSizes.x_small};
		&:hover,
		&:focus {
			opacity: 0.8;
			text-decoration: underline;
		}
	`,
};

export const BaseLink = styled.a<BaseLinkProps>`
	${({ theme, border, rounded, text }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 170px;
		min-height: 50px;
		border: 1px solid ${theme.colors.brand.main};
		padding: 14px ${theme.spaces[5]};
		cursor: pointer;
		border-radius: 5px;
		font-weight: 500;
		background: ${theme.colors.brand.main};
		transition: background 0.2s ease;
		&:hover,
		&:focus {
			background: none;
		}

		${border && modifiers.border(theme)}
		${rounded && modifiers.rounded(theme)}
		${text && modifiers.text(theme)}
	`}
`;
