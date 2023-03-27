import { IFAQ } from "@/interfaces/IFAQ";

export const faqsMock: IFAQ[] = [];

export const forEachOfFaqsMock = (cb: (item: IFAQ) => void) => {
	faqsMock.forEach((item) => cb(item));
};
