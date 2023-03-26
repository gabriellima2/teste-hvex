import Link from "next/link";
import NextImage from "next/image";
import styled, { css } from "styled-components";

export const Logo = () => (
	<Link href="/">
		<Image
			src="/logo.svg"
			alt="Logo escrito HVEX com uma cor metálica"
			width={123}
			height={57}
			priority
		/>
	</Link>
);

const Image = styled(NextImage)`
	${({ theme }) => css`
		width: 90px;
		height: 34px;
		position: relative;
		z-index: 1000;
		@media screen and (${theme.breakpoints.default}) {
			width: 100px;
			height: 40px;
		}
		@media screen and (${theme.breakpoints.medium}) {
			width: 123px;
			height: 57px;
		}
	`}
`;
