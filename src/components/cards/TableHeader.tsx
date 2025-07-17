import type { JSX } from "react";
import { flexRender, type Table } from "@tanstack/react-table";

import {
	TableHead,
	TableHeader,
	TableRow,
} from "../../../@/components/ui/table";
import type { Payment } from "@/types/type";

const TableHeaderComponent = ({
	table,
}: {
	table: Table<Payment>;
}): JSX.Element => {
	return (
		<TableHeader>
			{table.getHeaderGroups().map((headerGroup) => (
				<TableRow key={headerGroup.id}>
					{headerGroup.headers.map((header) => {
						return (
							<TableHead key={header.id}>
								{header.isPlaceholder
									? null
									: flexRender(
											header.column.columnDef.header,
											header.getContext()
										)}
							</TableHead>
						);
					})}
				</TableRow>
			))}
		</TableHeader>
	);
};

export default TableHeaderComponent;
