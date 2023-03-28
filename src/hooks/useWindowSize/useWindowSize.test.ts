import { act, renderHook } from "@testing-library/react";

import { useWindowSize } from ".";
import { defineWindowSize } from "@/__mocks__/define-window-size";

const SIZE = 300;

describe("useWindowSize", () => {
	beforeAll(() => {
		defineWindowSize({
			width: SIZE,
			height: SIZE,
		});
	});
	it("should update sizes state with resize", () => {
		const { result } = renderHook(useWindowSize);
		act(() => {
			window.dispatchEvent(new Event("resize"));
		});
		expect(result.current.width).toBe(SIZE);
		expect(result.current.height).toBe(SIZE);
	});
});
