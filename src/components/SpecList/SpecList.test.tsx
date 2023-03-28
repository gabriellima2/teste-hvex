import { render, screen } from "@testing-library/react";

import { SpecList } from "./SpecList";
import { makePreviewVariantTestId, makeFullVariantTestId } from "./components";

import { WithThemeProvider } from "@/__mocks__/with-theme-provider";
import { forEachOfSpecsMock, specsMock } from "./mocks/specs-mock";

const VARIANTS_TESTID = {
	PREVIEW: makePreviewVariantTestId(),
	FULL: makeFullVariantTestId(),
};

describe("<SpecList />", () => {
	describe("Render", () => {
		it("should render correctly with preview variant", () => {
			renderComponent();
			forEachOfSpecsMock((spec) => {
				const { title, image } = spec;
				expect(screen.getByTestId(VARIANTS_TESTID.PREVIEW)).toBeInTheDocument();
				expect(screen.getByAltText(image.alt)).toBeInTheDocument();
				expect(screen.getByText(title)).toBeInTheDocument();
			});
		});
		it("should render correctly with full variant", () => {
			renderComponent({ ...defaultProps, variants: "full" });
			forEachOfSpecsMock((spec) => {
				const { title, image } = spec;
				expect(screen.getByTestId(VARIANTS_TESTID.FULL)).toBeInTheDocument();
				expect(screen.getByAltText(image.alt)).toBeInTheDocument();
				expect(screen.getByText(title)).toBeInTheDocument();
			});
		});
	});
});

type Props = Parameters<typeof SpecList>[0];

const defaultProps: Props = {
	specs: specsMock,
	variants: "preview",
};

const renderComponent = (props: Props = defaultProps) =>
	render(
		<WithThemeProvider>
			<SpecList {...props} />
		</WithThemeProvider>
	);
