import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import { Accordion } from "../common";

import { moveAnimation } from "@/functions/move-animation";
import type { IFAQ } from "@/interfaces/IFAQ";

type FrequentlyAskedQuestionsProps = {
	faqs: IFAQ[];
};

export const FrequentlyAskedQuestions = (
	props: FrequentlyAskedQuestionsProps
) => {
	const { faqs } = props;
	return (
		<List length={faqs.length + 1}>
			{faqs.map((faq, index) => (
				<ListItem
					key={faq.id}
					{...moveAnimation({ from: index % 2 === 0 ? "left" : "right" })}
				>
					<Accordion
						id={faq.id}
						title={faq.question}
						paragraph={faq.answer}
						defaultOpen
					/>
				</ListItem>
			))}
		</List>
	);
};

type ListProps = {
	length: number;
};

const List = styled.ul<ListProps>`
	${({ theme, length }) => css`
		display: grid;
		grid-template-rows: repeat((${length}, 1fr));
		gap: ${theme.spaces[5]};
	`}
`;

const ListItem = styled(motion.li)`
	${({ theme }) => css`
		@media screen and (${theme.breakpoints.default}) {
			width: 770px;
		}
	`}
`;
