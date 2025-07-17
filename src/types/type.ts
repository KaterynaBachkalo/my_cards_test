export type Payment = {
	id: string;
	default: boolean;
	brand: "visa" | "mastercard" | "amex";
	last4: string;
};
