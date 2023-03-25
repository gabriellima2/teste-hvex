import { useCallback } from "react";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";

import type { IAnchor } from "@/interfaces/IAnchor";

type AnchorListProps = {
	anchors: IAnchor[];
};

export const AnchorList = (props: AnchorListProps) => {
	const { anchors } = props;
	const { pathname } = useRouter();

	const isCurrentPage = useCallback(
		(href: string) => {
			return pathname === href;
		},
		[pathname]
	);

	return (
		<>
			{anchors.map((anchor) => {
				const isActive = isCurrentPage(anchor.href);
				return (
					<AnchorListItem key={anchor.display}>
						<Anchor
							href={anchor.href}
							title={anchor.title || `Ir para ${anchor.display}`}
							aria-current={isActive}
							aria-disabled={isActive}
							tabIndex={isActive ? -1 : 0}
							isCurrent={isActive}
						>
							{anchor.display}
						</Anchor>
					</AnchorListItem>
				);
			})}
		</>
	);
};

type AnchorProps = {
	isCurrent?: boolean;
};

const AnchorListItem = styled.li`
	${({ theme }) => css`
		font-size: ${theme.fontSizes.x_small};
	`}
`;

const Anchor = styled.a<AnchorProps>`
	${({ theme, ...props }) => css`
		display: block;
		font-weight: 700;
		padding: 12px 12px 12px 0px;
		transition: color 0.2s ease;
		color: ${props.isCurrent && theme.colors.brand.main};
		cursor: ${props.isCurrent && "default"};
		&:hover,
		&:focus {
			color: ${theme.colors.brand.main};
		}
		@media screen and (${theme.breakpoints.medium}) {
			padding: 8px;
		}
	`}
`;
