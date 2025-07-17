import type { JSX } from "react";
import type { Table } from "@tanstack/react-table";
import type { Payment } from "@/types/type";
import { Input } from "../../../@/components/ui/input";

const FindForm = ({ table }: { table: Table<Payment> }): JSX.Element => {
	return (
		<Input
			className="max-w-sm"
			placeholder="Search by brand..."
			value={(table.getColumn("brand")?.getFilterValue() as string) ?? ""}
			onChange={(event) =>
				table.getColumn("brand")?.setFilterValue(event.target.value)
			}
		/>
	);
};

export default FindForm;
