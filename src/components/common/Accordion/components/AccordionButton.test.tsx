import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AccordionButton } from "./AccordionButton";
import { WithThemeProvider } from "@/__mocks__/with-theme-provider";

type Props = Parameters<typeof AccordionButton>[0];
const handleClickMock = jest.fn();

describe("<AccordionButton />", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	describe("Render", () => {
		it("should render correctly", () => {
			const { getByTitle, getByText } = renderComponent();
			const button = getByTitle(defaultProps.title);

			expect(button).toBeInTheDocument();
			expect(button).toHaveAttribute("id", defaultProps.id);
			expect(getByText(defaultProps.title)).toBeInTheDocument();
		});
	});
	describe("Interactions", () => {
		describe("Click", () => {
			it("should handle click", async () => {
				const { getByTitle } = renderComponent();
				const button = getByTitle(defaultProps.title);
				await userEvent.click(button);

				expect(handleClickMock).toHaveBeenCalledTimes(1);
			});
		});
	});
});

const defaultProps: Props = {
	id: "any_id",
	title: "any_title",
	contentId: "any_content_id",
	isExpanded: false,
	handleClick: handleClickMock,
};

const renderComponent = (props: Props = defaultProps) =>
	render(
		<WithThemeProvider>
			<AccordionButton {...props} />
		</WithThemeProvider>
	);
