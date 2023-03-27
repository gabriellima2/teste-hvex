import { type MotionProps } from "framer-motion";

type MoveAnimationParam = {
	from: "right" | "left";
};

export function moveAnimation(params: MoveAnimationParam): MotionProps {
	const { from } = params;
	return {
		initial: {
			opacity: 0,
			transform: `translate(${from === "right" ? "10px" : "-10px"})`,
		},
		whileInView: { opacity: 1, transform: "translate(0px)" },
	};
}
