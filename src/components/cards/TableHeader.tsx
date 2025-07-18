import { flexRender, type Table } from "@tanstack/react-table";
import type { FunctionComponent, Payment } from "../../common/types";
import {
	TableHead,
	TableHeader,
	TableRow,
} from "../../../@/components/ui/table";

const TableHeaderComponent = ({
	table,
}: {
	table: Table<Payment>;
}): FunctionComponent => {
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
