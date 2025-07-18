import type { Payment } from "../common/types";

const initialData: Array<Payment> = [
	{
		id: "m5gr84i9",
		default: true,
		brand: "visa",
		last4: "4242",
	},
	{
		id: "3u1reuv4",
		default: false,
		brand: "mastercard",
		last4: "6789",
	},
	{
		id: "derv1ws0",
		default: false,
		brand: "amex",
		last4: "1122",
	},
];

export default initialData;
