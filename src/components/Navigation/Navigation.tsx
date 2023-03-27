import { useEffect } from "react";
import styled, { css } from "styled-components";

import {
	useToggle,
	useWindowSize,
	useKeyboardNavigationInDialog,
} from "@/hooks";

import { AnchorList, NavigationButton } from "./components";
import { BaseLink, Overlay } from "@/components/common";

import { WINDOW_WIDTH_WHEN_NOT_MOBILE } from "@/styles";

type NavigationProps = Pick<Parameters<typeof AnchorList>[0], "anchors">;

export const Navigation = (props: NavigationProps) => {
	const { anchors } = props;
	const { width: windowWidth } = useWindowSize();
	const { isOpen, handleDisable, handleActive } = useToggle();
	const { ref, handleKeyDown } = useKeyboardNavigationInDialog<HTMLDivElement>({
		isOpen,
		handleDisable,
	});

	useEffect(() => {
		window.addEventListener("resize", handleDisable);
		window.addEventListener("scroll", handleDisable);

		return () => {
			window.removeEventListener("resize", handleDisable);
			window.removeEventListener("scroll", handleDisable);
		};
	}, []);

	return (
		<>
			<div
				ref={ref}
				onKeyDown={(e) => {
					if (windowWidth < WINDOW_WIDTH_WHEN_NOT_MOBILE)
						return handleKeyDown(e);
				}}
			>
				<NavigationButton
					title={`${isOpen ? "Fechar" : "Abrir"} menu de navegação`}
					handleClick={isOpen ? handleDisable : handleActive}
					display={isOpen ? "Fechar" : "Menu"}
				/>

				<Nav
					isOpen={isOpen}
					role={
						windowWidth < WINDOW_WIDTH_WHEN_NOT_MOBILE ? "dialog" : undefined
					}
					aria-hidden={!isOpen && windowWidth < WINDOW_WIDTH_WHEN_NOT_MOBILE}
				>
					<Anchors>
						<AnchorList anchors={anchors} />
						<AnchorListItem>
							<BuyNowLink title="Comprar" href="#" border>
								Comprar agora
							</BuyNowLink>
						</AnchorListItem>
					</Anchors>
				</Nav>
			</div>
			{isOpen && <Overlay handleClick={handleDisable} />}
		</>
	);
};

type NavProps = {
	isOpen: boolean;
};

const Nav = styled.nav<NavProps>`
	${({ theme, ...props }) => css`
		width: 100vw;
		height: 50vh;
		min-height: 400px;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 500;
		padding-top: 78px;
		visibility: ${props.isOpen ? "visible" : "hidden"};
		background: ${theme.colors.utils.contrast};
		@media screen and (${theme.breakpoints.medium}) {
			width: auto;
			height: auto;
			min-height: auto;
			padding-top: 0;
			position: static;
			visibility: visible;
			display: block;
		}
	`}
`;

const Anchors = styled.ul`
	${({ theme }) => css`
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 20px;
		@media screen and (${theme.breakpoints.medium}) {
			flex-direction: row;
			align-items: center;
			gap: ${theme.spaces[12]};
		}
	`}
`;

const AnchorListItem = styled.li``;

const BuyNowLink = styled(BaseLink)`
	${({ theme }) => css`
		font-size: ${theme.fontSizes.x_small};
	`}
`;
