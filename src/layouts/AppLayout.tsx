import { Header, Footer } from "@/components";

import type { LayoutDefaultProps } from "./@types/LayoutDefaultProps";

type AppLayoutProps = LayoutDefaultProps &
	Pick<Parameters<typeof Header>[0], "anchors">;

export const AppLayout = (props: AppLayoutProps) => {
	const { children, anchors } = props;
	return (
		<>
			<Header anchors={anchors} />
			<main>{children}</main>
			<Footer />
		</>
	);
};
