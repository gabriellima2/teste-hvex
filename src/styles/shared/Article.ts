import styled, { css, CSSProperties } from "styled-components";

type ArticleProps = Pick<CSSProperties, "alignItems"> & {};

export const Article = styled.article<ArticleProps>`
	${({ theme, alignItems }) => css`
		display: flex;
		flex-direction: column;
		align-items: ${alignItems || "center"};
		justify-content: space-between;
		gap: ${theme.spaces[5]};
		@media screen and (${theme.breakpoints.default}) {
			flex-direction: row;
		}
	`}
`;
