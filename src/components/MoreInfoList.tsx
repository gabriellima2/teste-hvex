import Image from "next/image";
import styled, { css } from "styled-components";

type MoreInfoListProps = {
	infos: string[];
	isAccentCheckIcon?: boolean;
};

export const MoreInfoList = (props: MoreInfoListProps) => {
	const { infos, isAccentCheckIcon } = props;
	return (
		<Container>
			{infos.map((info, i) => (
				<MoreInfoListItem key={i}>
					<Image
						src={
							isAccentCheckIcon
								? "/check-brand-color.svg"
								: "/check-util-color.svg"
						}
						alt="Ícone de Check"
						width={20}
						height={20}
					/>
					{info}
				</MoreInfoListItem>
			))}
		</Container>
	);
};

const Container = styled.ul`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: ${theme.spaces[7]};
	`}
`;

const MoreInfoListItem = styled.li`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		gap: ${theme.spaces[7]};
		color: ${theme.colors.font.dark};
		font-weight: 700;
	`}
`;
