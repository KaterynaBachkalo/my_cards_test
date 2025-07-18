import {
	FormControl,
	FormField,
	FormItem,
	FormMessage,
	FormLabel,
} from "../../../@/components/ui/form";
import { Input } from "../../../@/components/ui/input";
import type { FormProps, FunctionComponent } from "../../common/types";

const FormExpDate = ({ form }: FormProps): FunctionComponent => {
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
