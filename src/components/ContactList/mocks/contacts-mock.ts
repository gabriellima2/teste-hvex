import { IContact } from "@/interfaces/IContact";

export const contactsMock: IContact[] = [
	{ href: "any_href", name: "any_name", value: "any_value" },
];

export const forEachContactsMock = (cb: (contact: IContact) => void) => {
	contactsMock.forEach((contact) => cb(contact));
};
