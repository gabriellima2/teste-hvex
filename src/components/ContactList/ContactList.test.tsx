import { render, screen } from "@testing-library/react";

import { ContactList, makeContactTitleText } from "./ContactList";

import { WithThemeProvider } from "@/__mocks__/with-theme-provider";
import { contactsMock, forEachOfContactsMock } from "./mocks/contacts-mock";

describe("<ContactList />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();
			forEachOfContactsMock((contact) => {
				const { href, name, value } = contact;
				const anchor = screen.getByText(value);

				expect(anchor).toBeInTheDocument();
				expect(anchor).toHaveAttribute("href", href);
				expect(anchor).toHaveAttribute("title", makeContactTitleText(name));
			});
		});
	});
});

const renderComponent = () =>
	render(
		<WithThemeProvider>
			<ContactList contacts={contactsMock} />
		</WithThemeProvider>
	);
