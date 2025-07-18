import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../../@/components/ui/form";
import { Input } from "../../../@/components/ui/input";
import type { FormProps, FunctionComponent } from "../../common/types";

const FormCardNumber = ({ form }: FormProps): FunctionComponent => {
	return (
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
							maxLength={19}
							value={field.value ?? ""}
							onChange={(event) => {
								const rawValue = event.target.value.replace(/\D/g, "");
								const formatted = rawValue.match(/.{1,4}/g)?.join(" ") ?? "";
								field.onChange(formatted);
							}}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default FormCardNumber;
