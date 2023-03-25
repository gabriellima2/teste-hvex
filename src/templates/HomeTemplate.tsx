import Image from "next/image";
import styled, { css } from "styled-components";

import { DefaultContainer, WhatsappLink, MoreInfoList } from "@/components";
import { AppLayout } from "@/layouts/AppLayout";

import {
	BaseLink,
	Paragraph,
	Subtitle,
	WhiteBgColor,
	CenteredArticle,
	SubInfoSection,
	Article,
} from "@/styles";

import { benefits } from "@/assets/benefits";
import { anchors } from "@/assets/anchors";

export const HomeTemplate = () => {
	return (
		<AppLayout anchors={anchors}>
			<WhatsappLink />
			<DefaultContainer>
				<HeroArticle>
					<HeroSection>
						<GroupText>
							<HeroTitle>
								Tenha Informações em tempo real das condições dos ativos e com o
								monitoramento inteligente
							</HeroTitle>
							<Paragraph>
								Tenha acesso a informações em tempo real, administração remota
								de dados importantes da rede elétrica como: tensão, corrente,
								potência passante, energia, temperatura, sobrecarga entre
								outros, mapeando seu funcionamento, prevendo a vida útil dos
								ativos e aferindo perdas técnicas e não técnicas.
							</Paragraph>
						</GroupText>
						<BaseLink href="#" onlyBorder={false}>
							Quero mais informações
						</BaseLink>
					</HeroSection>
					<HeroImage
						src="/image1.png"
						alt="Imagem do produto 1"
						width={100}
						height={100}
						quality={100}
						unoptimized
					/>
				</HeroArticle>
			</DefaultContainer>

			<WhiteBgColor>
				<DefaultContainer flexDirection="row">
					<BenefitsArticle>
						<BenefitsSection>
							<GroupText>
								<Subtitle>Seja bem-vindo a era da energia inteligente</Subtitle>
								<Paragraph secondaryColor>
									As redes inteligentes são um caminho sem volta, o
									desenvolvimento e disceminação de dispositivos de medição e
									monitoramento são as ferramentas para redução de custos,
									perdas e trazem mais previsibilidade para as utilities de
									energia.
								</Paragraph>
							</GroupText>
							<MoreInfoList infos={benefits} isAccentCheckIcon />
						</BenefitsSection>
						<BenefitsImage
							src="/image2.png"
							alt="Imagens sobre energia agrupadas"
							width={100}
							height={100}
							quality={100}
							unoptimized
						/>
					</BenefitsArticle>
				</DefaultContainer>
			</WhiteBgColor>
		</AppLayout>
	);
};

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
