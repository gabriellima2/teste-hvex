import styled, { css } from "styled-components";
import { Article } from "./Article";

export const CenteredArticle = styled(Article)`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: ${theme.spaces[14]};
		@media screen and (${theme.breakpoints.medium}) {
			align-items: flex-start;
			flex-direction: row;
		}
	`}
`;
