export const InfosMock: string[] = ["any_info1", "any_info2"];

export const forEachOfInfosMock = (cb: (item: string) => void) => {
	InfosMock.forEach((info) => cb(info));
};
