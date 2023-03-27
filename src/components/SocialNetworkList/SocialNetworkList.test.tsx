import { render, screen } from "@testing-library/react";

import { SocialNetworksList } from "./SocialNetworksList";

import {
	forEachSocialNetworksMock,
	socialNetworksMock,
} from "./mocks/social-networks-mock";
import { WithThemeProvider } from "@/__mocks__/with-theme-provider";

describe("<SocialNetworkList />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();
			forEachSocialNetworksMock((item) => {
				const { name } = item;
				expect(screen.getByAltText(makeAltText(name))).toBeInTheDocument();
				expect(screen.getByTitle(makeTitleText(name))).toBeInTheDocument();
			});
		});
	});
});

const makeTitleText = (name: string) => `Ir para ${name}`;
const makeAltText = (name: string) => `Ícone da rede social ${name}`;

const renderComponent = () =>
	render(
		<WithThemeProvider>
			<SocialNetworksList socialNetworks={socialNetworksMock} />
		</WithThemeProvider>
	);
