type DefineWindowSizeParams = {
	width?: number;
	height?: number;
};

export function defineWindowSize(params: DefineWindowSizeParams) {
	const { width, height } = params;
	const define = (property: PropertyKey, value: number) => {
		Object.defineProperty(window, property, {
			writable: true,
			configurable: true,
			value,
		});
	};

	width && define("innerWidth", width);
	height && define("innerHeight", height);
}
