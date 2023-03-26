import { BsWhatsapp } from "react-icons/bs";
import styled, { css } from "styled-components";

import { BaseLink } from "../common";

export const WhatsappLink = () => (
	<Link href="#" title="Entrar em contato via Whatsaspp">
		<Icon>
			<BsWhatsapp />
		</Icon>
	</Link>
);

const Link = styled(BaseLink)`
	${({ theme }) => css`
		min-width: auto;
		min-height: auto;
		width: 64px;
		height: 64px;

		position: fixed;
		bottom: ${theme.spaces[15]};
		right: ${theme.spaces[5]};
		z-index: 10000;
		border-radius: 100%;
		&:hover,
		&:focus {
			color: ${theme.colors.brand.main};
		}
	`}
`;

const Icon = styled.i`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: ${theme.fontSizes.large};
	`}
`;
