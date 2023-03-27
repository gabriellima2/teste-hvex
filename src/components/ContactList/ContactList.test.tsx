import { render, screen } from "@testing-library/react";

import { ContactList } from "./ContactList";

import { WithThemeProvider } from "@/__mocks__/with-theme-provider";
import { contactsMock, forEachContactsMock } from "./mocks/contacts-mock";

describe("<ContactList />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();
			forEachContactsMock((contact) => {
				const { href, name, value } = contact;
				const anchor = screen.getByText(value);

				expect(anchor).toBeInTheDocument();
				expect(anchor).toHaveAttribute("href", href);
				expect(anchor).toHaveAttribute("title", makeTitleText(name));
			});
		});
	});
});

const makeTitleText = (name: string) => `Entrar em contato via ${name}`;

const renderComponent = () =>
	render(
		<WithThemeProvider>
			<ContactList contacts={contactsMock} />
		</WithThemeProvider>
	);
