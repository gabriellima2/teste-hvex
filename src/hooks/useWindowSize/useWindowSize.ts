import { useEffect, useState } from "react";

type Sizes = {
	width: number;
	height: number;
};

export function useWindowSize(): Sizes {
	const [sizes, setSizes] = useState<Sizes>({
		width: 0,
		height: 0,
	});

	const updateSizes = () => {
		if (typeof window === "undefined") return;
		setSizes({ width: window.innerWidth, height: window.innerHeight });
	};

	useEffect(() => {
		updateSizes();
		window.addEventListener("resize", updateSizes);
		return () => window.removeEventListener("resize", updateSizes);
	}, []);

	return {
		...sizes,
	};
}
