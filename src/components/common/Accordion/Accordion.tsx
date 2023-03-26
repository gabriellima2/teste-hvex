import { useMemo } from "react";
import styled, { css } from "styled-components";

import { useToggle } from "@/hooks";

import { AccordionContent, AccordionButton } from "./components";

type AccordionProps = {
	id: string;
	title: string;
	paragraph: string;
	defaultOpen?: boolean;
};

export const Accordion = (props: AccordionProps) => {
	const { id, title, paragraph, defaultOpen } = props;
	const { isOpen, handleToggle } = useToggle();

	const buttonId = useMemo(() => `accordion-${id}`, [id]);
	const contentId = useMemo(() => `accordion-content-${id}`, [id]);

	const isExpanded = !isOpen === defaultOpen;

	return (
		<Container isExpanded={isExpanded}>
			<header>
				<AccordionButton
					id={buttonId}
					contentId={contentId}
					isExpanded={isExpanded}
					handleClick={handleToggle}
					title={title}
				/>
			</header>
			<AccordionContent
				id={contentId}
				buttonId={buttonId}
				isExpanded={isExpanded}
			>
				<Paragraph>{paragraph}</Paragraph>
			</AccordionContent>
		</Container>
	);
};

type ContainerProps = {
	isExpanded: boolean;
};

const Container = styled.div<ContainerProps>`
	${({ theme, isExpanded }) => css`
		width: 100%;
		max-height: 100%;
		border: 1px solid #d9d9d9;
		border-radius: 10px;
		box-shadow: 0px 10px 20px -5px #0000001a;

		@media screen and (${theme.breakpoints.default}) {
			height: ${isExpanded ? "202px" : "auto"};
		}
	`}
`;

const Paragraph = styled.p`
	${({ theme }) => css`
		font-size: ${theme.fontSizes.x_small};
		color: ${theme.colors.font.dark};
	`}
`;
