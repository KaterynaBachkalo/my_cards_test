import { flexRender, type Table } from "@tanstack/react-table";
import { TableBody, TableCell, TableRow } from "../../../@/components/ui/table";
import type { FunctionComponent, Payment } from "../../common/types";

const TableBodyComponent = ({
	table,
}: {
	table: Table<Payment>;
}): FunctionComponent => {
	return (
		<TableBody>
			{table.getRowModel().rows?.length ? (
				table.getRowModel().rows.map((row) => (
					<TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
						{row.getVisibleCells().map((cell) => (
							<TableCell key={cell.id}>
								{flexRender(cell.column.columnDef.cell, cell.getContext())}
							</TableCell>
						))}
					</TableRow>
				))
			) : (
				<TableRow>
					<TableCell
						className="h-24 text-center"
						colSpan={table.getAllColumns().length}
					>
						No cards found
					</TableCell>
				</TableRow>
			)}
		</TableBody>
	);
};

export default TableBodyComponent;
