import {
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "../../../@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../../../@/components/ui/select";
import { useTheme } from "../../hooks/useTheme";
import type { FormProps, FunctionComponent } from "../../common/types";

import visaImg from "../../img/visa.png";
import mastercardImg from "../../img/mastercard.png";
import amexImg from "../../img/amex.png";

const FormBrand = ({ form }: FormProps): FunctionComponent => {
	const { theme } = useTheme();

	return (
		<FormField
			control={form.control}
			name="brand"
			render={({ field }) => (
				<FormItem>
					<Select value={field.value} onValueChange={field.onChange}>
						<FormControl>
							<SelectTrigger
								className={`!h-[25px] !p-0 border-none shadow-none shadow-transparent brand-position ${theme === "dark" ? "dark" : ""}`}
							>
								<SelectValue placeholder="Select brand">
									{field.value && (
										<img
											alt={field.value}
											src={
												field.value === "visa"
													? visaImg
													: field.value === "mastercard"
														? mastercardImg
														: amexImg
											}
											style={
												field.value === "visa"
													? { height: "15px" }
													: field.value === "mastercard"
														? { height: "25px" }
														: { height: "30px" }
											}
										/>
									)}
								</SelectValue>
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							<SelectItem value="visa">
								<img alt="Visa" src={visaImg} style={{ height: "15px" }} />
							</SelectItem>
							<SelectItem value="mastercard">
								<img
									alt="Mastercard"
									src={mastercardImg}
									style={{ height: "25px" }}
								/>
							</SelectItem>
							<SelectItem value="amex">
								<img alt="Amex" src={amexImg} style={{ height: "30px" }} />
							</SelectItem>
						</SelectContent>
					</Select>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default FormBrand;
