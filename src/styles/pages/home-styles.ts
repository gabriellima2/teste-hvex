import Image from "next/image";
import styled, { css } from "styled-components";
import { Article } from "../shared/Article";
import { CenteredArticle } from "../shared/CenteredArticle";
import { SubInfoSection } from "../shared/SubInfoSection";

export const HeroArticle = styled(Article)`
	${({ theme }) => css`
		min-height: 500px;
		padding: ${theme.spaces[4]} 0px;
		@media screen and (${theme.breakpoints.default}) {
			height: 75vh;
			min-height: 700px;
		}
		@media screen and (min-height: 700px) {
			min-height: 650px;
		}
	`}
`;

export const HeroSection = styled.section`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		gap: ${theme.spaces[15]};
		flex: 1;
	`}
`;

export const GroupText = styled.div`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: ${theme.spaces[7]};
	`}
`;

export const HeroTitle = styled.h1`
	width: 100%;
	max-width: 800px;
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

export const BenefitsArticle = styled(CenteredArticle)``;

export const BenefitsSection = styled(SubInfoSection)`
	${({ theme }) => css`
		order: 0;
		@media screen and (${theme.breakpoints.medium}) {
			order: 1;
		}
	`}
`;

export const BenefitsImage = styled(Image)`
	${({ theme }) => css`
		flex: 1;
		height: 100%;
		width: 100%;
		max-width: 700px;
		max-height: 100%;
		@media screen and (${theme.breakpoints.medium}) {
			max-width: 550px;
			max-height: 680px;
		}
	`}
`;
