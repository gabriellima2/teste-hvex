import { ISpec } from "@/interfaces/ISpec";

export const specsMock: ISpec[] = [
	{
		image: {
			src: "/any_src",
			alt: "any_alt",
		},
		title: "any_title",
	},
];

export const forEachOfSpecsMock = (cb: (spec: ISpec) => void) => {
	specsMock.forEach((spec) => cb(spec));
};
