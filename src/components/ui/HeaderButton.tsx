import { ArrowUpDown } from "lucide-react";
import { Button } from "../../../@/components/ui/button";
import type { JSX } from "react";
import type { HeaderContext } from "@tanstack/react-table";
import type { Payment } from "@/types/type";

interface IProps {
	column: HeaderContext<Payment, unknown>["column"];
	text: string;
}

const HeaderButton = ({ column, text }: IProps): JSX.Element => {
	return (
		<Button
			className="!p-0 button-brand-last"
			variant="ghost"
			onClick={() => {
				column.toggleSorting(column.getIsSorted() === "asc");
			}}
		>
			{text}
			<ArrowUpDown />
		</Button>
	);
};

export default HeaderButton;
