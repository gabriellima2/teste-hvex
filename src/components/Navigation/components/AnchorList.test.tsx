import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AnchorList, makeTitleText } from "./AnchorList";

import { WithThemeProvider } from "@/__mocks__/with-theme-provider";
import { anchorsMock, forEachOfAnchorsMock } from "../mocks/anchors-mock";

const CURRENT_PATHNAME = "/";
const handleDisableNavigationMock = jest.fn();

jest.mock("next/router", () => ({
	useRouter() {
		return {
			pathname: CURRENT_PATHNAME,
		};
	},
}));

describe("<AnchorList />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();
			forEachOfAnchorsMock((item) => {
				const { href, display, title } = item;
				const isCurrentPath = href === CURRENT_PATHNAME;
				const HTMLBooleanAttribute = `${isCurrentPath}`;

				const anchor = screen.getByText(display);
				expect(anchor).toBeInTheDocument();
				expect(anchor).toHaveAttribute("href", href);
				expect(anchor).toHaveAttribute("aria-current", HTMLBooleanAttribute);
				expect(anchor).toHaveAttribute("aria-disabled", HTMLBooleanAttribute);
				expect(anchor).toHaveAttribute("aria-current", HTMLBooleanAttribute);
				expect(anchor).toHaveAttribute("tabIndex", `${isCurrentPath ? -1 : 0}`);
				expect(
					screen.getByTitle(title ?? makeTitleText(display))
				).toBeInTheDocument();
			});
		});
	});
	describe("Interactions", () => {
		describe("Click", () => {
			it("should handle click", async () => {
				renderComponent();
				const { display } = anchorsMock[0];
				const anchor = screen.getByText(display);
				await userEvent.click(anchor);

				expect(handleDisableNavigationMock).toHaveBeenCalled();
			});
		});
	});
});

type Props = Parameters<typeof AnchorList>[0];

const defaultProps: Props = {
	anchors: anchorsMock,
	handleDisableNavigation: handleDisableNavigationMock,
};

const renderComponent = (props: Props = defaultProps) =>
	render(
		<WithThemeProvider>
			<AnchorList {...props} />
		</WithThemeProvider>
	);
