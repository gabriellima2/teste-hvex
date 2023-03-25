import Image from "next/image";
import styled, { css } from "styled-components";
import { Article } from "../shared/Article";

export const HeroArticle = styled(Article)`
	${({ theme }) => css`
		height: 80vh;
		min-height: 500px;
		padding-top: ${theme.spaces[4]};
		@media screen and (${theme.breakpoints.default}) {
			min-height: 700px;
		}
	`}
`;

export const HeroSection = styled.section`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: ${theme.spaces[15]};
		flex: 1;
	`}
`;

export const HeroTexts = styled.div``;

export const HeroTitle = styled.h1`
	${({ theme }) => css`
		width: 100%;
		max-width: 800px;
		margin-bottom: ${theme.spaces[7]};
		font-size: ${theme.fontSizes.large};
		@media screen and (${theme.breakpoints.default}) {
			font-size: ${theme.fontSizes.x_large};
		}
	`}
`;

export const HeroImage = styled(Image)`
	${({ theme }) => css`
		display: none;
		@media screen and (${theme.breakpoints.medium}) {
			flex: 1;
			max-width: 360px;
			display: block;
			height: 100%;
			max-height: 540px;
		}
	`}
`;
