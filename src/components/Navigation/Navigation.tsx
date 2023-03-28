import { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

import {
	useKeyboardNavigationInDialog,
	useToggle,
	useWindowSize,
} from "@/hooks";

import { AnchorList, NavigationButton } from "./components";
import { BaseLink, Overlay } from "@/components/common";

import { WIDTHS_OF_DEVICES } from "@/constants/widths-of-devices";

type NavigationProps = Pick<Parameters<typeof AnchorList>[0], "anchors">;

export const Navigation = (props: NavigationProps) => {
	const { anchors } = props;
	const navigationRef = useRef<HTMLDivElement | null>(null);
	const { width: windowWidth } = useWindowSize();
	const { isOpen, handleDisable, handleActive } = useToggle();
	const { handleKeyDown } = useKeyboardNavigationInDialog<HTMLDivElement>({
		ref: navigationRef,
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

	const userDeviceIsMobile = windowWidth < WIDTHS_OF_DEVICES.medium;

	return (
		<>
			<Container
				ref={navigationRef}
				onKeyDown={(e) => {
					if (userDeviceIsMobile) return handleKeyDown(e);
				}}
			>
				<NavigationButton
					title={`${isOpen ? "Fechar" : "Abrir"} menu de navegação`}
					handleClick={isOpen ? handleDisable : handleActive}
				>
					{isOpen ? "Fechar" : "Menu"}
				</NavigationButton>

				<Nav
					isOpen={isOpen}
					role={userDeviceIsMobile ? "dialog" : undefined}
					aria-hidden={!isOpen && userDeviceIsMobile}
				>
					<Anchors>
						<AnchorList
							anchors={anchors}
							handleDisableNavigation={handleDisable}
						/>
						<AnchorListItem>
							<BuyNowLink
								title="Comprar"
								href="#"
								border
								onClick={handleDisable}
							>
								Comprar agora
							</BuyNowLink>
						</AnchorListItem>
					</Anchors>
				</Nav>
			</Container>
			{isOpen && <Overlay handleClick={handleDisable} />}
		</>
	);
};

type NavProps = {
	isOpen: boolean;
};

const Container = styled.div``;

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
		transition: all 0.2s ease;
		opacity: ${props.isOpen ? 1 : 0};
		visibility: ${props.isOpen ? "visible" : "hidden"};
		background: ${theme.colors.utils.contrast};
		@media screen and (${theme.breakpoints.medium}) {
			width: auto;
			height: auto;
			min-height: auto;
			padding-top: 0;
			position: static;
			visibility: visible;
			opacity: 1;
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
