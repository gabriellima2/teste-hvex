import type { KeyboardEvent as IKeyboardEvent } from "react";

export function makeKeyboardEvent<El>(
	type: string,
	options?: KeyboardEventInit
) {
	return new KeyboardEvent(type, options) as unknown as IKeyboardEvent<El>;
}
