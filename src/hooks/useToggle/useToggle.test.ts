import { act, renderHook } from "@testing-library/react";
import { useToggle } from ".";

describe("useToggle", () => {
	describe("Initial values", () => {
		it("should return initial values", () => {
			const { result } = render();
			expect(result.current.isOpen).toBeFalsy();
			expect(typeof result.current.handleToggle).toBe("function");
			expect(typeof result.current.handleDisable).toBe("function");
			expect(typeof result.current.handleActive).toBe("function");
		});
	});
	describe("Methods", () => {
		describe("HandleToggle", () => {
			it("should toggle isOpen", () => {
				const { result } = render();
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
		});
		describe("handleDisable", () => {
			it("isOpen should be false", () => {
				const { result } = render();

				act(() => {
					result.current.handleActive();
				});
				expect(result.current.isOpen).toBeTruthy();

				act(() => {
					result.current.handleDisable();
				});
				expect(result.current.isOpen).toBeFalsy();
			});
		});
		describe("handleActive", () => {
			it("isOpen should be true", () => {
				const { result } = render();

				act(() => {
					result.current.handleActive();
				});
				expect(result.current.isOpen).toBeTruthy();
			});
		});
	});
});

const render = () => renderHook(useToggle);
