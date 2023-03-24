import { BsWhatsapp } from "react-icons/bs";
import styled, { css } from "styled-components";

import { BaseLink } from "@/styles";

export const WhatsappLink = () => (
	<Link href="#">
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
		border-radius: 100%;
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
