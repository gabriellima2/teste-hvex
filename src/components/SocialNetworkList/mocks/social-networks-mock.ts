import { ISocialNetwork } from "@/interfaces/ISocialNetwork";

export const socialNetworksMock: ISocialNetwork[] = [
	{ name: "any_name", iconSrc: "/any_icon_src" },
];

export const forEachOfSocialNetworksMock = (
	cb: (item: ISocialNetwork) => void
) => {
	socialNetworksMock.forEach((item) => cb(item));
};
