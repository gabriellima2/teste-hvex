import styled, { css } from "styled-components";

type NavigationButtonProps = {
	title: string;
	display: string;
	handleClick: () => void;
};

export const NavigationButton = (props: NavigationButtonProps) => {
	const { display, title, handleClick } = props;
	return (
		<Button type="button" title={title} onClick={handleClick}>
			{display}
		</Button>
	);
};

const Button = styled.button`
	${({ theme }) => css`
		position: relative;
		z-index: 1000;
		font-family: ${({ theme }) => theme.fontFamily.main};
		color: ${({ theme }) => theme.colors.font.light};
		text-transform: uppercase;
		font-weight: 600;
		font-size: 0.75rem;
		padding: 4px;
		cursor: pointer;
		border: none;
		background: none;
		@media screen and (${theme.breakpoints.medium}) {
			display: none;
		}
	`}
`;
