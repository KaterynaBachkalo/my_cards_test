import type { JSX } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../../../@/components/ui/button";
import { Form } from "../../../@/components/ui/form";

import FormCardNumber from "./FormCardNumber";
import FormBrand from "./FormBrand";
import FormExpDate from "./FormExpDate";
import FormCVC from "./FormCVC";
import type { Payment } from "../../types/type";
import { useTheme } from "../../hooks/useTheme";

interface IProps {
	onClose: () => void;
	setTableData: React.Dispatch<React.SetStateAction<Array<Payment>>>;
}

const FormSchema = z.object({
	number: z.string().min(19, {
		message: "Card number must be at least 16 characters.",
	}),
	brand: z.enum(["visa", "mastercard", "amex"], {
		errorMap: () => ({ message: "Brand is required" }),
	}),

	date: z.string().min(4, {
		message: "Expiration date is required",
	}),
	cvc: z.string().min(3, {
		message: "CVC must be at least 3 characters.",
	}),
});

export type FormSchemaType = z.infer<typeof FormSchema>;

const CreateCardModal = ({ onClose, setTableData }: IProps): JSX.Element => {
	const { theme } = useTheme();

	const form = useForm<FormSchemaType>({
		resolver: zodResolver(FormSchema),
	});

	const onSubmit = (data: FormSchemaType): void => {
		const newCard: Payment = {
			id: crypto.randomUUID(),
			brand: data.brand,
			last4: data.number.replace(/\s/g, "").slice(-4),
			default: false,
		};

		setTableData((previous) => [...previous, newCard]);

		onClose();
	};

	return (
		<>
			<h3 className="text-2xl font-bold mb-6">Add new card</h3>

			<Form {...form}>
				<form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
					<div className="form-wrap">
						<FormCardNumber form={form} />

						<FormBrand form={form} />
					</div>

					<div className="form-wrap-date-cvc">
						<FormExpDate form={form} />
						<FormCVC form={form} />
					</div>

					<ul className="button-wrap">
						<li>
							<Button
								className={`cancel-btn ${theme === "dark" ? "dark" : ""}`}
								variant="outline"
								onClick={onClose}
							>
								Cancel
							</Button>
						</li>

						<li>
							<Button
								className={`add-btn ${theme === "dark" ? "dark" : ""}`}
								type="submit"
								variant="secondary"
							>
								Add Card
							</Button>
						</li>
					</ul>
				</form>
			</Form>
		</>
	);
};

export default CreateCardModal;
