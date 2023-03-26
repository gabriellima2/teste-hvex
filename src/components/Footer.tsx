import styled, { css } from "styled-components";

import { Logo, SocialNetworksList, ContactList } from "./";
import { Content, Paragraph, Subtitle } from "@/styles";

import { socialNetworks, contacts } from "@/assets";

export const Footer = () => (
	<Container>
		<FooterContent>
			<Logo />
			<InfoGroups>
				<Group>
					<Title isAccent>Endereço</Title>
					<Address>
						R. Ismael Pinto de Noronha, 86 - Nossa Sra. de Fatima, Itajubá - MG,
						37502-508
					</Address>
				</Group>
				<Group>
					<Title isAccent>Contato</Title>
					<Contacts>
						<ContactList contacts={contacts} />
					</Contacts>
				</Group>
				<Group>
					<Title isAccent>Confira nossa redes</Title>
					<SocialNetworks>
						<SocialNetworksList socialNetworks={socialNetworks} />
					</SocialNetworks>
				</Group>
			</InfoGroups>
		</FooterContent>
	</Container>
);

const Container = styled.footer`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: ${theme.spaces[10]} 0px;
		@media screen and (${theme.breakpoints.medium}) {
			padding: 0px;
			height: 259px;
		}
	`}
`;

const FooterContent = styled(Content)`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: ${theme.spaces[10]};
		@media screen and (${theme.breakpoints.default}) {
			align-items: center;
			flex-direction: row;
			flex-wrap: wrap;
		}
	`}
`;

const InfoGroups = styled.section`
	${({ theme }) => css`
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: ${theme.spaces[15]};
		@media screen and (${theme.breakpoints.default}) {
			gap: 77px;
			flex-direction: row;
			align-items: flex-start;
			justify-content: flex-end;
		}
	`}
`;

const Group = styled.div``;

const Title = styled(Subtitle)`
	${({ theme }) => css`
		font-size: ${theme.fontSizes.small};
		margin-bottom: ${theme.spaces[8]};
		@media screen and (${theme.breakpoints.default}) {
			margin-bottom: ${theme.spaces[10]};
		}
	`}
`;

const Address = styled(Paragraph)`
	${({ theme }) => css`
		max-width: 223px;
		font-size: ${theme.fontSizes.x_small};
		@media screen and (${theme.breakpoints.medium}) {
			min-width: 150px;
		}
	`}
`;

const SocialNetworks = styled.ul`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		gap: ${theme.spaces[6]};
	`}
`;

const Contacts = styled.ul`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: ${theme.spaces[4]};
	`}
`;
