import type { IAnchor } from "@/interfaces/IAnchor";

export const anchorsMock: IAnchor[] = [
	{ href: "/", display: "any_display_1", title: "any_title_1" },
	{ href: "any_href", display: "any_display_2", title: "any_title_2" },
	{ href: "any_href", display: "any_display_3" },
];

export const forEachOfAnchorsMock = (cb: (anchor: IAnchor) => void) => {
	anchorsMock.forEach((anchor) => cb(anchor));
};
