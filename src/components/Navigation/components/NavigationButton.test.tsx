import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { NavigationButton } from "./NavigationButton";
import { WithThemeProvider } from "@/__mocks__/with-theme-provider";

const TEXT_CONTENT = "any_text";
const handleClickMock = jest.fn();

describe("<NavigationButton", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();
			expect(screen.getByText(TEXT_CONTENT)).toBeInTheDocument();
			expect(screen.getByTitle(defaultProps.title)).toBeInTheDocument();
		});
	});
	describe("Interactions", () => {
		describe("Click", () => {
			it("should handle click", async () => {
				renderComponent();
				const button = screen.getByText(TEXT_CONTENT);
				await userEvent.click(button);
				expect(handleClickMock).toHaveBeenCalled();
			});
		});
	});
});

type Props = Parameters<typeof NavigationButton>[0];

const defaultProps: Props = {
	children: TEXT_CONTENT,
	title: "any_title",
	handleClick: handleClickMock,
};

const renderComponent = (props: Props = defaultProps) =>
	render(
		<WithThemeProvider>
			<NavigationButton {...props} />
		</WithThemeProvider>
	);
