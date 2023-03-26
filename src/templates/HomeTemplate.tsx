import Image from "next/image";
import styled, { css } from "styled-components";

import {
	DefaultContainer,
	WhatsappLink,
	MoreInfoList,
	SpecList,
	FrequentlyAskedQuestions,
	BaseLink,
	Paragraph,
	Subtitle,
	WhiteBgColor,
	CenteredArticle,
	SubInfoSection,
	Article,
	Line,
	Title,
} from "@/components";
import { AppLayout } from "@/layouts/AppLayout";

import {
	specsPreview,
	faqs,
	specsFull,
	features,
	benefits,
	anchors,
} from "@/assets";

export const HomeTemplate = () => {
	return (
		<AppLayout anchors={anchors}>
			<WhatsappLink />
			<DefaultContainer>
				<HeroArticle>
					<HeroSection>
						<GroupText>
							<HeroTitle isAccent>
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
						<BaseLink href="#" title="Mais informações">
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
						priority
					/>
				</HeroArticle>
			</DefaultContainer>

			<WhiteBgColor>
				<DefaultContainer flexDirection="row">
					<CenteredArticle>
						<BenefitsSection>
							<GroupText>
								<BenefitsTitle>
									Seja bem-vindo a era da energia inteligente
								</BenefitsTitle>
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
							sizes="100%"
						/>
					</CenteredArticle>
				</DefaultContainer>
			</WhiteBgColor>

			<DefaultContainer>
				<SpecPreviewArticle>
					<GroupText>
						<GroupTitle>
							<SpecPreviewTitle>OMNI TRAFO</SpecPreviewTitle>
							<Subtitle isAccent>
								É o dispositivo capaz de integrar os transformadores as redes
								inteligentes
							</Subtitle>
						</GroupTitle>

						<Paragraph>
							O Omni Trafo envia informações em tempo real, permitindo a
							administração remota de dados importantes da rede elétrica, como
							tensão, corrente, potência passante, energia, temperatura,
							sobrecarga entre outros, mapeando seu funcionamento, prevendo a
							vida útil dos ativos e aferindo perdas técnicas e não técnicas.
						</Paragraph>
					</GroupText>
					<SpecsPreview>
						<SpecList specs={specsPreview} variants="preview" />
					</SpecsPreview>
				</SpecPreviewArticle>
			</DefaultContainer>

			<Details>
				<DefaultContainer flexDirection="row">
					<SpecsFullArticle>
						<SpecsFullSection>
							<GroupText>
								<SpecsFullGroupTitle>
									<SpecsFullTitle>Omni trafo</SpecsFullTitle>
									<Line />
									<SpecsFullSubtitle>
										Monitoramento inteligente de transformadores de distribuição
									</SpecsFullSubtitle>
								</SpecsFullGroupTitle>
								<Paragraph secondaryColor>
									O Omni trafo é uma solução consolidada para monitoramento de
									ativos. Através deste equipamento, informações importantes da
									rede são enviadas em tempo real, permitindo assim a
									administração remota de dados como:
								</Paragraph>
							</GroupText>
							<SpecsFull>
								<SpecList specs={specsFull} variants="full" />
							</SpecsFull>
						</SpecsFullSection>
						<SpecsFullImage
							src="/image1.png"
							alt="Imagem do Omni Transformer"
							width={100}
							height={100}
							quality={100}
							sizes="100%"
							priority
						/>
					</SpecsFullArticle>
				</DefaultContainer>

				<DefaultContainer flexDirection="row">
					<CenteredArticle>
						<SubInfoSection>
							<GroupText>
								<Title contrast>
									Desenvolvido para melhorar a performance dos ativos de
									distribuição
								</Title>
								<Line />
							</GroupText>
							<MoreInfoList infos={features} />
						</SubInfoSection>
						<FeaturesImage
							src="/image3.png"
							alt="Imagem do Omni Transformer"
							width={100}
							height={100}
							quality={100}
							sizes="100%"
						/>
					</CenteredArticle>
				</DefaultContainer>
			</Details>

			<DefaultContainer>
				<LearnMoreArticle>
					<LearnMoreTitle>
						Quer saber mais sobre como podemos te ajudar a melhorar a
						performance de seus ativos?
					</LearnMoreTitle>
					<Line />
					<LearnMoreLink
						href="#"
						hasBorder
						title="Para saber mais, fale com um consultor"
					>
						Falar com um consultor
					</LearnMoreLink>
				</LearnMoreArticle>
			</DefaultContainer>

			<WhiteBgColor>
				<DefaultContainer>
					<FAQArticle>
						<Title contrast>Perguntas Frequentes</Title>
						<FrequentlyAskedQuestions faqs={faqs} />
					</FAQArticle>
				</DefaultContainer>
			</WhiteBgColor>
		</AppLayout>
	);
};

const HeroArticle = styled(Article)`
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

const HeroSection = styled.section`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		gap: ${theme.spaces[15]};
		flex: 1;
	`}
`;

const GroupTitle = styled.div``;

const GroupText = styled.div`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: ${theme.spaces[7]};
	`}
`;

const HeroTitle = styled(Title)`
	width: 100%;
	max-width: 800px;
`;

const HeroImage = styled(Image)`
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

const BenefitsSection = styled(SubInfoSection)`
	${({ theme }) => css`
		order: 0;
		@media screen and (${theme.breakpoints.medium}) {
			order: 1;
		}
	`}
`;

const BenefitsTitle = styled(Title)`
	${({ theme }) => css`
		color: ${theme.colors.font.util};
	`}
`;

const BenefitsImage = styled(Image)`
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

const SpecPreviewArticle = styled(Article)`
	${({ theme }) => css`
		padding: ${theme.spaces[15]} 0px;
		flex-direction: column;
		gap: ${theme.spaces[14]};
		@media screen and (${theme.breakpoints.medium}) {
			flex-direction: row;
		}
	`}
`;

const SpecPreviewTitle = styled.h1`
	${({ theme }) => css`
		font-size: ${theme.fontSizes.normal};
		margin-bottom: ${theme.spaces[13]};
		text-transform: capitalize;
		@media screen and (${theme.breakpoints.default}) {
			font-size: ${theme.fontSizes.large};
		}
	`}
`;

const Details = styled(WhiteBgColor)`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: ${theme.spaces[15]};
	`}
`;

const SpecsFullSubtitle = styled(Subtitle)`
	${({ theme }) => css`
		@media screen and (${theme.breakpoints.default}) {
			max-width: 505px;
		}
	`}
`;

const SpecsPreview = styled.ul`
	${({ theme }) => css`
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: ${theme.spaces[8]};
		@media screen and (${theme.breakpoints.default}) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(2, 1fr);
		}
	`}
`;

const SpecsFullArticle = styled(Article)`
	${({ theme }) => css`
		flex-direction: column;
		gap: ${theme.spaces[15]};
		@media screen and (${theme.breakpoints.medium}) {
			flex-direction: row;
		}
	`}
`;

const SpecsFullSection = styled(SubInfoSection)`
	align-items: center;
	${({ theme }) => css`
		@media screen and (${theme.breakpoints.medium}) {
			align-items: flex-start;
			order: 1;
		}
	`}
`;

const SpecsFullImage = styled(HeroImage)`
	${({ theme }) => css`
		display: block;
		flex: 1;
		height: 100%;
		width: 100%;
		max-width: 350px;
		max-height: 100%;
		transform: scaleX(-1);
		@media screen and (${theme.breakpoints.medium}) {
			max-width: 360px;
			max-height: 540px;
		}
	`}
`;

const SpecsFullGroupTitle = styled(GroupTitle)`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: ${theme.spaces[6]};
	`}
`;

const SpecsFullTitle = styled.h1`
	${({ theme }) => css`
		color: ${theme.colors.utils.contrast};
		text-transform: uppercase;
		font-size: ${theme.fontSizes.normal};
		@media screen and (${theme.breakpoints.default}) {
			font-size: ${theme.fontSizes.large};
		}
	`}
`;

const SpecsFull = styled.ul`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: fit-content;
	max-width: 680px;
	gap: 32px;
`;

const FeaturesImage = styled(Image)`
	${({ theme }) => css`
		flex: 1;
		height: 100%;
		width: 100%;
		max-width: 700px;
		max-height: 100%;
		@media screen and (${theme.breakpoints.medium}) {
			max-width: 630px;
			max-height: 630px;
		}
	`}
`;

const LearnMoreArticle = styled(Article)`
	${({ theme }) => css`
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: ${theme.spaces[7]};
		padding: ${theme.spaces[7]} 0px;
	`}
`;

const LearnMoreTitle = styled(Title)`
	${({ theme }) => css`
		text-align: center;
		@media screen and (${theme.breakpoints.medium}) {
			max-width: 570px;
		}
	`}
`;

const LearnMoreLink = styled(BaseLink)`
	${({ theme }) => css`
		color: ${theme.colors.brand.main};

		&:hover,
		&:focus {
			color: ${theme.colors.font.light};
		}
	`}
`;

const FAQArticle = styled(Article)`
	${({ theme }) => css`
		flex-direction: column;
		gap: ${theme.spaces[15]};
	`}
`;
