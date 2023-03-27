import { render, screen } from "@testing-library/react";

import { AccordionContent } from "./AccordionContent";
import { WithThemeProvider } from "@/__mocks__/with-theme-provider";

const MESSAGE = "any_message";
const SECTION_TESTID = "accordion-content";

describe("<AccordionContent />", () => {
	const getAccordionContentSection = () => screen.getByTestId(SECTION_TESTID);

	describe("Render", () => {
		it("should render correctly with isExpanded false", () => {
			const { queryByText } = renderComponent({
				...defaultProps,
				isExpanded: false,
			});

			const content = getAccordionContentSection();
			expect(content).toHaveAttribute("hidden");
			expect(queryByText(MESSAGE)).not.toBeInTheDocument();
		});
		it("should render correctly with isExpanded true", () => {
			const { getByText } = renderComponent({
				...defaultProps,
				isExpanded: true,
			});

			const content = getAccordionContentSection();
			expect(content).not.toHaveAttribute("hidden");
			expect(getByText(MESSAGE)).toBeInTheDocument();
		});
	});
});

type Props = Parameters<typeof AccordionContent>[0];

const defaultProps: Props = {
	id: "any_id",
	buttonId: "any_button_id",
	isExpanded: false,
	children: <p>{MESSAGE}</p>,
};

const renderComponent = (props: Props = defaultProps) =>
	render(
		<WithThemeProvider>
			<AccordionContent {...props} />
		</WithThemeProvider>
	);
