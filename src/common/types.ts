import type { UseFormReturn } from "react-hook-form";

import type { FormSchemaType } from "../components/cards/CreateCardModal";

export type FunctionComponent = React.ReactElement | null;

type HeroIconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
	React.RefAttributes<SVGSVGElement>;
type IconProps = HeroIconSVGProps & {
	title?: string;
	titleId?: string;
};
export type Heroicon = React.FC<IconProps>;

export type Payment = {
	id: string;
	default: boolean;
	brand: "visa" | "mastercard" | "amex";
	last4: string;
};

export type FormProps = {
	form: UseFormReturn<FormSchemaType>;
};

export interface IContextTheme {
	theme: "light" | "dark";
	toggleTheme: () => void;
}
