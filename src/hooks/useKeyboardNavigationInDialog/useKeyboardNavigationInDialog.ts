import { type KeyboardEvent, type MutableRefObject, useEffect } from "react";
import { changeFocusEl } from "@/functions/change-focus-el";

type UseKeyboardNavigationInDialogParams<El> = {
	ref: MutableRefObject<El | null>;
	isOpen: boolean;
	handleDisable: () => void;
};

type UseKeyboardNavigationInDialogReturn<El> = {
	handleKeyDown: (e: KeyboardEvent<El>) => void;
};

let lastFocusableElementBeforeOpenMenu: Element;

export function useKeyboardNavigationInDialog<El extends HTMLElement>(
	params: UseKeyboardNavigationInDialogParams<El>
): UseKeyboardNavigationInDialogReturn<El> {
	const { ref, isOpen, handleDisable } = params;

	const handleFocus = (e: KeyboardEvent<El>) => {
		if (!ref.current) return;

		const focusableEls = ref.current.querySelectorAll("a[href], button");
		const firstFocusableEl = focusableEls[0];
		const currentFocusabelEl = document.activeElement;
		const lastFocusableEl = focusableEls[focusableEls.length - 1];

		if (e.shiftKey && currentFocusabelEl === lastFocusableEl) return;
		if (
			e.shiftKey &&
			e.key === "Tab" &&
			currentFocusabelEl === firstFocusableEl
		) {
			changeFocusEl(lastFocusableEl);
			return e.preventDefault();
		}
		if (currentFocusabelEl === lastFocusableEl) {
			changeFocusEl(firstFocusableEl);
			return e.preventDefault();
		}
	};

	const handleKeyDown = (e: KeyboardEvent<El>) => {
		console.log(e.key);
		if (e.key === "Tab" || e.key === "Shift") return handleFocus(e);
		if (e.key === "Escape") return handleDisable();
	};

	useEffect(() => {
		const currentFocusabelEl = document.activeElement;

		if (isOpen) {
			if (currentFocusabelEl) {
				lastFocusableElementBeforeOpenMenu = currentFocusabelEl;
			}
		}

		if (!lastFocusableElementBeforeOpenMenu) return;
		changeFocusEl(lastFocusableElementBeforeOpenMenu);
	}, [isOpen]);

	return {
		handleKeyDown,
	};
}
