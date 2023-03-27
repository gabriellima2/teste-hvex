import styled, { css, CSSProperties } from "styled-components";
import type { Modifiers } from "@/@types/Modifiers";

type ArticleProps = Pick<CSSProperties, "alignItems"> & {
	center?: boolean;
	withResponsiveSideContent?: boolean;
};

type ArticleVariants = keyof Pick<
	ArticleProps,
	"center" | "withResponsiveSideContent"
>;

const modifiers: Modifiers<ArticleVariants> = {
	center: (theme) => css`
		width: 100%;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: ${theme.spaces[14]};
		@media screen and (${theme.breakpoints.medium}) {
			align-items: flex-start;
		}
	`,
	withResponsiveSideContent: (theme) => css`
		flex-direction: column;
		justify-content: center;
		gap: ${theme.spaces[15]};
		@media screen and (${theme.breakpoints.default}) {
			flex-direction: column;
		}
		@media screen and (${theme.breakpoints.medium}) {
			flex-direction: row;
		}
	`,
};

export const Article = styled.article<ArticleProps>`
	${({ theme, alignItems, center, withResponsiveSideContent }) => css`
		display: flex;
		flex-direction: column;
		align-items: ${alignItems || "center"};
		justify-content: space-between;
		gap: ${theme.spaces[5]};
		@media screen and (${theme.breakpoints.default}) {
			flex-direction: row;
		}
		${center && modifiers.center(theme)};
		${withResponsiveSideContent && modifiers.withResponsiveSideContent(theme)};
	`}
`;
