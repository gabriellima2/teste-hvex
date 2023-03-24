import { DefaultContainer } from "@/components";

import type { LayoutDefaultProps } from "./@types/LayoutDefaultProps";

export const AppLayout = (props: LayoutDefaultProps) => {
	const { children } = props;
	return (
		<>
			<header></header>
			<main>
				<DefaultContainer>{children}</DefaultContainer>
			</main>
			<footer></footer>
		</>
	);
};
