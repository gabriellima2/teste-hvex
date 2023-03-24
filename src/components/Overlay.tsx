import styled from "styled-components";

type OverlayProps = {
	handleClick: () => void;
};

export const Overlay = (props: OverlayProps) => {
	const { handleClick } = props;
	return <Area onClick={handleClick} />;
};

const Area = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 100;
	background: #0000006f;
`;
