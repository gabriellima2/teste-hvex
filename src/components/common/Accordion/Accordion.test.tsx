import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Accordion } from "./Accordion";
import { WithThemeProvider } from "@/__mocks__/with-theme-provider";

describe("<Accordion />", () => {
	describe("Render", () => {
		it("should render correctly with default open false", () => {
			renderComponent({ ...defaultProps });
			expect(screen.getByTitle(defaultProps.title)).toBeInTheDocument();
			expect(
				screen.queryByText(defaultProps.paragraph)
			).not.toBeInTheDocument();
		});
		it("should render correctly with default open true", () => {
			renderComponent({
				...defaultProps,
				defaultOpen: true,
			});
			expect(screen.getByTitle(defaultProps.title)).toBeInTheDocument();
			expect(screen.getByText(defaultProps.paragraph)).toBeInTheDocument();
		});
	});
	describe("Interactions", () => {
		describe("Click", () => {
			async function simulateAccordionClick() {
				const button = screen.getByTitle(defaultProps.title);
				await act(async () => {
					await userEvent.click(button);
				});
			}

			it("should toggle accordion with clicks", async () => {
				renderComponent({
					...defaultProps,
				});

				expect(
					screen.queryByText(defaultProps.paragraph)
				).not.toBeInTheDocument();
				await simulateAccordionClick();
				expect(screen.getByText(defaultProps.paragraph)).toBeInTheDocument();
			});
			it("should disable accordion with click", async () => {
				renderComponent({
					...defaultProps,
					defaultOpen: true,
				});

				expect(screen.getByText(defaultProps.paragraph)).toBeInTheDocument();
				await simulateAccordionClick();
				expect(
					screen.queryByText(defaultProps.paragraph)
				).not.toBeInTheDocument();
			});
			it("should active accordion with click", async () => {
				renderComponent({
					...defaultProps,
				});

				expect(
					screen.queryByText(defaultProps.paragraph)
				).not.toBeInTheDocument();
				await simulateAccordionClick();
				expect(screen.getByText(defaultProps.paragraph)).toBeInTheDocument();
			});
		});
	});
});

type Props = Parameters<typeof Accordion>[0];

const defaultProps: Props = {
	id: "any_id",
	title: "any_title",
	paragraph: "any_paragraph",
	defaultOpen: false,
};

const renderComponent = (props: Props) =>
	render(
		<WithThemeProvider>
			<Accordion {...props} />
		</WithThemeProvider>
	);
