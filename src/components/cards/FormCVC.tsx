import type { JSX } from "react";
import {
	FormControl,
	FormField,
	FormItem,
	FormMessage,
	FormLabel,
} from "../../../@/components/ui/form";
import type { FormProps } from "../../types/type";
import { Input } from "../../../@/components/ui/input";

const FormCVC = ({ form }: FormProps): JSX.Element => {
	return (
		<FormField
			control={form.control}
			name="cvc"
			render={({ field }) => (
				<FormItem>
					<FormLabel>CVC</FormLabel>
					<FormControl>
						<Input
							className="!w-[80px]"
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
	);
};

export default FormCVC;
