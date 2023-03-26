import styled, { css } from "styled-components";

import { Accordion } from "./Accordion";
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
			{faqs.map((faq) => (
				<ListItem key={faq.id}>
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

const ListItem = styled.li`
	${({ theme }) => css`
		@media screen and (${theme.breakpoints.default}) {
			width: 770px;
		}
	`}
`;
