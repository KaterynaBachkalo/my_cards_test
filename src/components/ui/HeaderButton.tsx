import { ArrowUpDown } from "lucide-react";
import { Button } from "../../../@/components/ui/button";
import type { HeaderContext } from "@tanstack/react-table";
import type { FunctionComponent, Payment } from "../../common/types";

interface IProps {
	column: HeaderContext<Payment, unknown>["column"];
	text: string;
}

const HeaderButton = ({ column, text }: IProps): FunctionComponent => {
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
