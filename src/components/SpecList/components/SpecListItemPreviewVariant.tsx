import NextImage from "next/image";
import styled, { css } from "styled-components";

import { Card } from "@/components/common";
import type { ISpec } from "@/interfaces/ISpec";

export const makePreviewVariantTestId = () => "preview-variant";

export const SpecListItemPreviewVariant = (props: ISpec) => {
	const { title, image } = props;
	return (
		<Container data-testid={makePreviewVariantTestId()}>
			<Card>
				<Image {...image} width={100} height={100} />
				<Title>{title}</Title>
			</Card>
		</Container>
	);
};

const Container = styled.li``;

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
