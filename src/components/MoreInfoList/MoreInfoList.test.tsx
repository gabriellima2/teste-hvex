import { render, screen } from "@testing-library/react";

import { MoreInfoList } from "./MoreInfoList";

import { WithThemeProvider } from "@/__mocks__/with-theme-provider";
import { forEachInfosMock, InfosMock } from "./mocks/infos-mock";

const CHECK_ICON_SRC_ATTRS = {
	DEFAULT: "/check-util-color.svg",
	ACCENT: "/check-brand-color.svg",
};

describe("<MoreInfoList />", () => {
	const getCheckIconElements = () => screen.getAllByAltText("Ícone de Check");

	function testCheckIcon(srcAttr: string) {
		getCheckIconElements().forEach((icon) => {
			expect(icon).toBeInTheDocument();
			expect(icon).toHaveAttribute("src", srcAttr);
		});
	}

	describe("Render", () => {
		it("should render correctly with isAccentCheckIcon false", () => {
			renderComponent();
			forEachInfosMock((info) => {
				testCheckIcon(CHECK_ICON_SRC_ATTRS.DEFAULT);
				expect(screen.getByText(info)).toBeInTheDocument();
			});
		});
		it("should render correctly with isAccentCheckIcon true", () => {
			renderComponent({ ...defaultProps, isAccentCheckIcon: true });
			forEachInfosMock((info) => {
				testCheckIcon(CHECK_ICON_SRC_ATTRS.ACCENT);
				expect(screen.getByText(info)).toBeInTheDocument();
			});
		});
	});
});

type Props = Parameters<typeof MoreInfoList>[0];

const defaultProps: Props = {
	infos: InfosMock,
	isAccentCheckIcon: false,
};

const renderComponent = (props: Props = defaultProps) =>
	render(
		<WithThemeProvider>
			<MoreInfoList {...props} />
		</WithThemeProvider>
	);
