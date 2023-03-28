export function createElement() {
	const container = document.createElement("div");
	[...new Array(5)].forEach(() => {
		const anchor = document.createElement("a");
		anchor.setAttribute("href", "#");
		container.appendChild(anchor);
	});
	document.body.appendChild(container);
	return container;
}
