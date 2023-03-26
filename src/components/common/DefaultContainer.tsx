import type { ReactNode } from "react";
import type { CSSProperties } from "styled-components";

import { Center, Content } from "..";

type DefaultContainerProps = Pick<CSSProperties, "flexDirection"> & {
	children: ReactNode;
};

export const DefaultContainer = (props: DefaultContainerProps) => {
	const { children, flexDirection } = props;
	return (
		<Center flexDirection="column">
			<Content>
				<Center flexDirection={flexDirection ?? "column"}>{children}</Center>
			</Content>
		</Center>
	);
};
