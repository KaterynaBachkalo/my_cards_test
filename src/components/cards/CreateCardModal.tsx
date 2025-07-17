import type { JSX } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../../../@/components/ui/button";
import { Input } from "../../../@/components/ui/input";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../../@/components/ui/form";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../../../@/components/ui/select";
import type { Payment } from "@/types/type";

interface IProps {
	onClose: () => void;
	setTableData: React.Dispatch<React.SetStateAction<Array<Payment>>>;
}

const CreateCardModal = ({ onClose, setTableData }: IProps): JSX.Element => {
	const FormSchema = z.object({
		number: z.string().min(16, {
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

	type FormSchemaType = z.infer<typeof FormSchema>;

	const form = useForm<FormSchemaType>({
		resolver: zodResolver(FormSchema),
	});

	const onSubmit = (data: FormSchemaType): void => {
		const newCard: Payment = {
			id: crypto.randomUUID(),
			brand: data.brand,
			last4: data.number.slice(-4),
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
					<FormField
						control={form.control}
						name="number"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Card Number</FormLabel>
								<FormControl>
									<Input
										placeholder="1234 5678 9012 3456"
										{...field}
										inputMode="numeric"
										maxLength={16}
										pattern="\d*"
										value={field.value ?? ""}
										onKeyDown={(event) => {
											if (
												!/[\d]/.test(event.key) &&
												event.key !== "Backspace" &&
												event.key !== "Tab"
											) {
												event.preventDefault();
											}
										}}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="brand"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Brand</FormLabel>
								<Select
									defaultValue={field.value}
									onValueChange={field.onChange}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select brand" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="visa">Visa</SelectItem>
										<SelectItem value="mastercard">MasterCard</SelectItem>
										<SelectItem value="amex">American Express</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="date"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Expiration Date</FormLabel>
								<FormControl>
									<Input
										{...field}
										inputMode="numeric"
										maxLength={4}
										pattern="\d*"
										placeholder="MMYY"
										value={field.value ?? ""}
										onKeyDown={(event) => {
											if (
												!/[\d]/.test(event.key) &&
												event.key !== "Backspace" &&
												event.key !== "Tab"
											) {
												event.preventDefault();
											}
										}}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="cvc"
						render={({ field }) => (
							<FormItem>
								<FormLabel>CVC</FormLabel>
								<FormControl>
									<Input
										inputMode="numeric"
										pattern="\d*"
										placeholder="123"
										type="password"
										{...field}
										maxLength={3}
										value={field.value ?? ""}
										onKeyDown={(event) => {
											if (
												!/[\d]/.test(event.key) &&
												event.key !== "Backspace" &&
												event.key !== "Tab"
											) {
												event.preventDefault();
											}
										}}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<ul className="button-wrap">
						<li>
							<Button className="" variant="outline" onClick={onClose}>
								Cancel
							</Button>
						</li>

						<li>
							<Button className="" type="submit" variant="secondary">
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
