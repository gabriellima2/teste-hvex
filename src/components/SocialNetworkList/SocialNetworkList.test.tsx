import { render, screen } from "@testing-library/react";

import {
	makeSocialNetworkImageAltText,
	makeSocialNetworkTitleText,
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
				expect(
					screen.getByAltText(makeSocialNetworkImageAltText(name))
				).toBeInTheDocument();
				expect(
					screen.getByTitle(makeSocialNetworkTitleText(name))
				).toBeInTheDocument();
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
