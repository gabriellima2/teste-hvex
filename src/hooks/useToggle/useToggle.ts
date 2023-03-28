import { useState } from "react";

export type UseToggleReturn = {
	isOpen: boolean;
	handleToggle: () => void;
	handleDisable: () => void;
	handleActive: () => void;
};

export function useToggle(): UseToggleReturn {
	const [isOpen, setIsOpen] = useState(false);

	return {
		isOpen,
		handleToggle: () => setIsOpen((prevState) => !prevState),
		handleDisable: () => setIsOpen(false),
		handleActive: () => setIsOpen(true),
	};
}
