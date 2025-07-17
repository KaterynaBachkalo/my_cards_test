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

const FormExpDate = ({ form }: FormProps): JSX.Element => {
	return (
		<FormField
			control={form.control}
			name="date"
			render={({ field }) => (
				<FormItem>
					<FormLabel>Expiration Date</FormLabel>
					<FormControl>
						<div className="form-wrap">
							<Input
								{...field}
								className="input-date pl-2.5"
								maxLength={7}
								placeholder="MM   YY"
								value={field.value ?? ""}
								onChange={(event) => {
									const rawValue = event.target.value.replace(/\D/g, "");
									const formatted =
										rawValue.match(/.{1,2}/g)?.join("   ") ?? "";
									field.onChange(formatted);
								}}
							/>
							<p className="slash">/</p>
						</div>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default FormExpDate;
