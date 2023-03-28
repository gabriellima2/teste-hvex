import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Navigation } from "./Navigation";

import { changeFocusEl } from "@/functions/change-focus-el";
import { WithThemeProvider } from "@/__mocks__/with-theme-provider";
import { defineWindowSize } from "@/__mocks__/define-window-size";
import { anchorsMock } from "./mocks/anchors-mock";

jest.mock("next/router", () => ({
	useRouter() {
		return {
			pathname: "/",
		};
	},
}));

describe("<Navigation />", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});
	beforeEach(() => {
		renderComponent();
	});

	describe("Large Screen", () => {
		beforeAll(() => windowResize({ width: 1920, height: 1080 }));

		describe("Render", () => {
			it("should render correctly", () => {
				const navigation = screen.getByTestId(NAVIGATION_TESTID);
				expect(navigation).not.toHaveAttribute("role", "dialog");
				expect(navigation).toHaveAttribute("aria-hidden", "false");
				expect(screen.getByRole("button")).toBeInTheDocument();
			});
		});
	});
	describe("Small and Medium screens", () => {
		beforeAll(() => windowResize({ width: 600, height: 900 }));

		describe("Render", () => {
			it("should render correctly", () => {
				const navigation = screen.getByTestId(NAVIGATION_TESTID);
				const button = screen.getByRole("button");

				expect(navigation).toHaveAttribute("role", "dialog");
				expect(navigation).toHaveAttribute("aria-hidden", "true");
				expect(navigation).not.toBeVisible();
				expect(button).toBeVisible();
			});
		});

		describe("Interactions", () => {
			describe("Click", () => {
				it("should open with click", async () => {
					const closeButton = await clickOnNavigatioButton();
					const navigation = screen.getByTestId(NAVIGATION_TESTID);

					expect(navigation).toHaveAttribute("role", "dialog");
					expect(navigation).toHaveAttribute("aria-hidden", "false");
					expect(navigation).toBeVisible();
					expect(closeButton).toBeVisible();
				});
				it("should close with click", async () => {
					await clickOnNavigatioButton();

					const openButton = await clickOnNavigatioButton();
					const navigation = screen.getByTestId(NAVIGATION_TESTID);

					expect(navigation).toHaveAttribute("role", "dialog");
					expect(navigation).toHaveAttribute("aria-hidden", "true");
					expect(navigation).not.toBeVisible();
					expect(openButton).toBeVisible();
				});
			});
			describe("Keyboard", () => {
				const getLastElement = () => screen.getByTitle("Comprar");

				it("should move focus from first to last element", async () => {
					const firstElement = await clickOnNavigatioButton();
					const lastElement = getLastElement();
					if (!firstElement || !lastElement)
						throw new Error(ELEMENTS_NOT_FOUND);

					changeFocusEl(firstElement);
					await userEvent.tab({ shift: true });
					expect(lastElement).toHaveFocus();
				});
				it("should move focus from last to first element", async () => {
					const firstElement = await clickOnNavigatioButton();
					const lastElement = getLastElement();
					if (!firstElement || !lastElement)
						throw new Error(ELEMENTS_NOT_FOUND);

					changeFocusEl(lastElement);
					await userEvent.tab();
					expect(firstElement).toHaveFocus();
				});
			});
			describe("Resize", () => {
				it("should disable with resize", async () => {
					await clickOnNavigatioButton();
					windowResize({ width: 800 });

					const navigation = screen.getByTestId(NAVIGATION_TESTID);
					expect(navigation).toHaveAttribute("role", "dialog");
					expect(navigation).toHaveAttribute("aria-hidden", "true");
					expect(navigation).not.toBeVisible();
				});
			});
		});
	});
});

const NAVIGATION_TESTID = "navigation";
const ELEMENTS_NOT_FOUND = "The first and last element were not found";

async function clickOnNavigatioButton() {
	const button = screen.getByRole("button");
	await act(async () => {
		await userEvent.click(button);
	});
	return button;
}

function windowResize(params: Parameters<typeof defineWindowSize>[0]) {
	defineWindowSize(params);
	act(() => {
		window.dispatchEvent(new Event("resize"));
	});
}

const renderComponent = () => {
	render(
		<WithThemeProvider>
			<Navigation anchors={anchorsMock} />
		</WithThemeProvider>
	);
};
