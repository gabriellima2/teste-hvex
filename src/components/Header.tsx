import styled, { css } from "styled-components";

import { Logo, Navigation } from ".";
import { Content } from "@/styles";

type HeaderProps = Pick<Parameters<typeof Navigation>[0], "anchors">;

export const Header = (props: HeaderProps) => {
	const { anchors } = props;
	return (
		<Container>
			<HeaderContent>
				<Logo />
				<Navigation anchors={anchors} />
			</HeaderContent>
		</Container>
	);
};

const Container = styled.header`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		background: ${theme.colors.utils.contrast};
	`}
`;

const HeaderContent = styled(Content)`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
