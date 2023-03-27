import { DefaultTheme } from "styled-components";

export type Modifiers<T> = Record<
	T,
	(theme: DefaultTheme) => FlattenSimpleInterpolation
>;
