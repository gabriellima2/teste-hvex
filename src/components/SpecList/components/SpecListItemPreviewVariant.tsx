import type { ISpec } from "@/interfaces/ISpec";
import NextImage from "next/image";
import { Card } from "@/styles";
import styled, { css } from "styled-components";

export const SpecListItemPreviewVariant = (props: ISpec) => {
	const { title, image } = props;
	return (
		<Card>
			<Image {...image} width={100} height={100} />
			<Title>{title}</Title>
		</Card>
	);
};

const Image = styled(NextImage)`
	${({ theme }) => css`
		height: 80px;
		width: 80px;
		@media screen and (${theme.breakpoints.medium}) {
			max-width: 100px;
			max-height: 100px;
		}
	`}
`;

const Title = styled.h1`
	${({ theme }) => css`
		text-align: center;
		font-size: ${theme.fontSizes.small};
		@media screen and (${theme.breakpoints.medium}) {
			font-size: ${theme.fontSizes.normal};
		}
	`}
`;
