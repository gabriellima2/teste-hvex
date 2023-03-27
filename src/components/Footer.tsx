import styled, { css } from "styled-components";

import { Logo, SocialNetworksList, ContactList } from "./";
import { Content, Title, Paragraph } from "./common";

import { socialNetworks, contacts } from "@/assets";

export const Footer = () => (
	<Container>
		<FooterContent>
			<Logo />
			<InfoGroups>
				<Group>
					<GroupTitle>Endereço</GroupTitle>
					<Address>
						R. Ismael Pinto de Noronha, 86 - Nossa Sra. de Fatima, Itajubá - MG,
						37502-508
					</Address>
				</Group>
				<Group>
					<GroupTitle>Contato</GroupTitle>
					<Contacts>
						<ContactList contacts={contacts} />
					</Contacts>
				</Group>
				<Group>
					<GroupTitle>Confira nossa redes</GroupTitle>
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

const GroupTitle = styled(Title)`
	${({ theme }) => css`
		color: ${theme.colors.brand.secondary};
		margin-bottom: ${theme.spaces[8]};
		font-size: ${theme.fontSizes.small};
		@media screen and (${theme.breakpoints.default}) {
			font-size: ${theme.fontSizes.small};
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
		flex-wrap: wrap;
		@media screen and (${theme.breakpoints.default}) {
			flex-wrap: nowrap;
		}
	`}
`;

const Contacts = styled.ul`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: ${theme.spaces[4]};
	`}
`;
