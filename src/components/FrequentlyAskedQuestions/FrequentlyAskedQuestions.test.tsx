import { render, screen } from "@testing-library/react";

import { FrequentlyAskedQuestions } from "./FrequentlyAskedQuestions";

import { WithThemeProvider } from "@/__mocks__/with-theme-provider";
import { faqsMock, forEachOfFaqsMock } from "./mocks/faqs-mock";

describe("<FrequentlyAskedQuestions />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();
			forEachOfFaqsMock((faq) => {
				const { answer, question } = faq;
				expect(screen.getByText(answer)).toBeInTheDocument();
				expect(screen.getByText(question)).toBeInTheDocument();
			});
		});
	});
});

const renderComponent = () =>
	render(
		<WithThemeProvider>
			<FrequentlyAskedQuestions faqs={faqsMock} />
		</WithThemeProvider>
	);
