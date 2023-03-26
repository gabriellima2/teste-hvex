import type { ReactNode } from "react";
import styled, { css } from "styled-components";

type AccordionContentProps = {
	id: string;
	buttonId: string;
	isExpanded: boolean;
	children: ReactNode;
};

export const AccordionContent = (props: AccordionContentProps) => {
	const { id, buttonId, isExpanded, children } = props;
	return (
		<Content
			id={id}
			role="region"
			aria-labelledby={buttonId}
			hidden={!isExpanded}
		>
			{isExpanded && children}
		</Content>
	);
};

const Content = styled.section`
	${({ theme }) => css`
		max-width: 84.5%;
		border-top: 1px solid #d9d9d9;
		margin-left: ${theme.spaces[5]};
		padding: ${theme.spaces[5]} ${theme.spaces[5]} ${theme.spaces[5]} 0px;
	`}
`;
