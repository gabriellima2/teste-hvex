export type Modifiers<T> = Record<
	T,
	(theme?: DefaultTheme) => FlattenSimpleInterpolation
>;
