import { FaChevronDown } from "react-icons/fa";
import styled, { css } from "styled-components";

import { Center } from "@/components/common";

type AccordionButtonProps = {
	id: string;
	contentId: string;
	title: string;
	isExpanded: boolean;
	handleClick: () => void;
};

export const AccordionButton = (props: AccordionButtonProps) => {
	const { id, contentId, title, isExpanded, handleClick } = props;
	return (
		<Button
			type="button"
			id={id}
			title={title}
			aria-controls={contentId}
			aria-expanded={isExpanded}
			onClick={handleClick}
		>
			<ButtonTitle>{title}</ButtonTitle>
			<Icon as="i" isExpanded={isExpanded}>
				<FaChevronDown />
			</Icon>
		</Button>
	);
};

type IconProps = {
	isExpanded?: boolean;
};

const Button = styled.button`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: ${theme.spaces[5]};
		padding: ${theme.spaces[5]};
		padding-right: ${theme.spaces[7]};
		text-align: left;
		font-weight: 700;
		font-size: ${theme.fontSizes.x_small};
		color: ${theme.colors.utils.accent};
		cursor: pointer;
		border: none;
		background: none;
		@media screen and (${theme.breakpoints.default}) {
			height: 66px;
		}
	`}
`;

const ButtonTitle = styled.span`
	max-width: 90%;
`;

const Icon = styled(Center)<IconProps>`
	${({ theme, isExpanded }) => css`
		font-size: 12px;
		color: ${theme.colors.utils.accent};
		transition: rotate 0.2s ease;
		rotate: ${isExpanded ? "0deg" : "180deg"};
	`}
`;
