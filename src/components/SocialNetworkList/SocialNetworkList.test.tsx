import { render, screen } from "@testing-library/react";

import {
	makeAltText,
	makeTitleText,
	SocialNetworksList,
} from "./SocialNetworksList";

import {
	forEachOfSocialNetworksMock,
	socialNetworksMock,
} from "./mocks/social-networks-mock";
import { WithThemeProvider } from "@/__mocks__/with-theme-provider";

describe("<SocialNetworkList />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();
			forEachOfSocialNetworksMock((item) => {
				const { name } = item;
				expect(screen.getByAltText(makeAltText(name))).toBeInTheDocument();
				expect(screen.getByTitle(makeTitleText(name))).toBeInTheDocument();
			});
		});
	});
});

const renderComponent = () =>
	render(
		<WithThemeProvider>
			<SocialNetworksList socialNetworks={socialNetworksMock} />
		</WithThemeProvider>
	);
