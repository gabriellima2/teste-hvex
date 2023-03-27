import { act, renderHook } from "@testing-library/react";
import { useToggle } from "./useToggle";

describe("useToggle", () => {
	it("should toggle isOpen", () => {
		const { result } = renderHook(useToggle);
		expect(result.current.isOpen).toBeFalsy();

		act(() => {
			result.current.handleToggle();
		});
		expect(result.current.isOpen).toBeTruthy();

		act(() => {
			result.current.handleToggle();
		});
		expect(result.current.isOpen).toBeFalsy();
	});
	it("isOpen should be false", () => {
		const { result } = renderHook(useToggle);

		act(() => {
			result.current.handleActive();
		});
		expect(result.current.isOpen).toBeTruthy();

		act(() => {
			result.current.handleDisable();
		});
		expect(result.current.isOpen).toBeFalsy();
	});
	it("isOpen should be true", () => {
		const { result } = renderHook(useToggle);

		act(() => {
			result.current.handleActive();
		});
		expect(result.current.isOpen).toBeTruthy();
	});
});
