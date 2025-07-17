import type { UseFormReturn } from "react-hook-form";

import type { FormSchemaType } from "../components/cards/CreateCardModal";

export type Payment = {
	id: string;
	default: boolean;
	brand: "visa" | "mastercard" | "amex";
	last4: string;
};

export type FormProps = {
	form: UseFormReturn<FormSchemaType>;
};
