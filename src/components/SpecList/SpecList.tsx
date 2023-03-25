import {
	SpecListItemFullVariant,
	SpecListItemPreviewVariant,
} from "./components";
import type { ISpec } from "@/interfaces/ISpec";

type SpecListProps = {
	variants: keyof typeof Variants;
	specs: ISpec[];
};

const Variants = {
	full: SpecListItemFullVariant,
	preview: SpecListItemPreviewVariant,
};

export const SpecList = (props: SpecListProps) => {
	const { specs, variants } = props;
	const Content = Variants[variants];

	return (
		<>
			{specs.map((spec) => (
				<Content {...spec} key={spec.title} />
			))}
		</>
	);
};
