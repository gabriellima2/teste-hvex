import Image from "next/image";
import styled, { css } from "styled-components";

import { Center } from "@/components/common";
import type { ISpec } from "@/interfaces/ISpec";

export const SpecListItemFullVariant = (props: ISpec) => {
	const { title, image } = props;
	return (
		<Container data-testid="full-variant">
			<ImageContainer>
				<Image {...image} width={40} height={40} />
			</ImageContainer>
			<Title>{title}</Title>
		</Container>
	);
};

const Container = styled.li`
	${({ theme }) => css`
		width: 100%;
		max-width: 145px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: ${theme.spaces[4]};
	`}
`;

const ImageContainer = styled(Center)`
	${({ theme }) => css`
		width: 76px;
		height: 76px;
		display: flex;
		border-radius: 100%;
		background: ${theme.colors.utils.accent};
	`}
`;

const Title = styled.h3`
	${({ theme }) => css`
		font-weight: 500;
		font-size: 14px;
		text-align: center;
		color: ${theme.colors.utils.contrast};
	`}
`;
