import { act, renderHook } from "@testing-library/react";

import { useWindowSize } from ".";
import { defineWindowSize } from "@/__mocks__/define-window-size";

const DEFAULT_SIZES = {
	WIDTH: 1024,
	HEIGHT: 768,
};
const SIZE = 300;

describe("useWindowSize", () => {
	describe("Initial values", () => {
		it("should return initial values", () => {
			const { result } = render();
			expect(result.current.width).toBe(DEFAULT_SIZES.WIDTH);
			expect(result.current.height).toBe(DEFAULT_SIZES.HEIGHT);
		});
	});
	describe("Methods", () => {
		describe("UpdateSizes", () => {
			beforeAll(() => {
				defineWindowSize({
					width: SIZE,
					height: SIZE,
				});
			});
			it("should update sizes state with resize", () => {
				const { result } = render();
				act(() => {
					window.dispatchEvent(new Event("resize"));
				});
				expect(result.current.width).toBe(SIZE);
				expect(result.current.height).toBe(SIZE);
			});
		});
	});
});

const render = () => renderHook(useWindowSize);
