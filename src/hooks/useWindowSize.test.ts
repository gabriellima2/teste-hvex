import { act, renderHook } from "@testing-library/react";
import { useWindowSize } from "./useWindowSize";

const SIZE = 300;

describe("useWindowSize", () => {
	beforeAll(() => {
		Object.defineProperty(window, "innerWidth", {
			writable: true,
			configurable: true,
			value: SIZE,
		});
		Object.defineProperty(window, "innerHeight", {
			writable: true,
			configurable: true,
			value: SIZE,
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
