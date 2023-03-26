import Link from "next/link";
import styled, { css } from "styled-components";

import type { IContact } from "@/interfaces/IContact";

type ContactListProps = {
	contacts: IContact[];
};

export const ContactList = (props: ContactListProps) => {
	const { contacts } = props;
	return (
		<>
			{contacts.map((contact, i) => (
				<ContactListItem key={i}>
					<ContactLink
						href={contact.href}
						title={`Entrar em contato via ${contact.name}`}
					>
						{contact.value}
					</ContactLink>
				</ContactListItem>
			))}
		</>
	);
};

const ContactListItem = styled.li``;

const ContactLink = styled(Link)`
	${({ theme }) => css`
		font-size: ${theme.fontSizes.x_small};

		&:hover,
		&:focus {
			opacity: 0.8;
			text-decoration: underline;
		}
	`}
`;
