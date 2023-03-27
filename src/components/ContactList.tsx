import styled from "styled-components";

import type { IContact } from "@/interfaces/IContact";
import { BaseLink } from "./common";

type ContactListProps = {
	contacts: IContact[];
};

export const ContactList = (props: ContactListProps) => {
	const { contacts } = props;
	return (
		<>
			{contacts.map((contact, i) => (
				<ContactListItem key={i}>
					<BaseLink
						text
						href={contact.href}
						title={`Entrar em contato via ${contact.name}`}
					>
						{contact.value}
					</BaseLink>
				</ContactListItem>
			))}
		</>
	);
};

const ContactListItem = styled.li``;
