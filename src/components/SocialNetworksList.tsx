import Image from "next/image";
import styled, { css } from "styled-components";

import { BaseLink } from "@/styles";
import type { ISocialNetwork } from "@/interfaces/ISocialNetwork";

type SocialNetworksListProps = {
	socialNetworks: ISocialNetwork[];
};

export const SocialNetworksList = (props: SocialNetworksListProps) => {
	const { socialNetworks } = props;
	return (
		<>
			{socialNetworks.map((socialNetwork, i) => (
				<SocialNetworkListItem key={i}>
					<SocialNetworkLink href="#" title={`Ir para ${socialNetwork.name}`}>
						<Image
							src={socialNetwork.iconSrc}
							alt={`Ícone da rede social ${socialNetwork.name}`}
							width={24}
							height={24}
						/>
					</SocialNetworkLink>
				</SocialNetworkListItem>
			))}
		</>
	);
};

const SocialNetworkListItem = styled.li`
	width: fit-content;
`;

const SocialNetworkLink = styled(BaseLink)`
	${({ theme }) => css`
		width: 50px;
		height: 50px;
		min-width: auto;
		min-height: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 100%;
		background: ${theme.colors.brand.main};
	`}
`;
