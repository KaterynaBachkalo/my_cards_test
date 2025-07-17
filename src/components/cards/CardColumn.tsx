import type { Dispatch, JSX, SetStateAction } from "react";

import type {
	CellContext,
	ColumnDef,
	HeaderContext,
} from "@tanstack/react-table";

import { Trash2 } from "lucide-react";

import { Button } from "../../../@/components/ui/button";
import {
	RadioGroup,
	RadioGroupItem,
} from "../../../@/components/ui/radio-group";
import type { Payment } from "@/types/type";
import HeaderButton from "../ui/HeaderButton";

const CardColumn = (
	setTableData: Dispatch<SetStateAction<Array<Payment>>>
): Array<ColumnDef<Payment>> => [
	{
		accessorKey: "brand",
		header: ({ column }: HeaderContext<Payment, unknown>): JSX.Element => {
			return <HeaderButton column={column} text="Brand" />;
		},
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue("brand")}</div>
		),
	},
	{
		accessorKey: "last4",
		header: ({ column }: HeaderContext<Payment, unknown>): JSX.Element => {
			return <HeaderButton column={column} text="Last 4" />;
		},
		cell: ({ row }) => <div className="lowercase">{row.getValue("last4")}</div>,
	},
	{
		accessorKey: "default",
		header: () => <div>Default</div>,
		cell: ({ row }: CellContext<Payment, unknown>): JSX.Element => {
			const rowId = row.original.id;
			const isDefault = row.getValue<boolean>("default");

			const handleSelectDefault = (id: string): void => {
				setTableData((previous) =>
					previous.map((item) => ({
						...item,
						default: item.id === id,
					}))
				);
			};

			return (
				<RadioGroup
					value={isDefault ? rowId : ""}
					onValueChange={() => {
						handleSelectDefault(rowId);
					}}
				>
					<div className="flex items-center gap-2">
						<RadioGroupItem id={`radio-${rowId}`} value={rowId} />
						<label
							className="text-sm text-muted-foreground"
							htmlFor={`radio-${rowId}`}
						>
							{isDefault ? "Default" : ""}
						</label>
					</div>
				</RadioGroup>
			);
		},
	},
	{
		id: "actions",
		header: () => <div>Action</div>,
		enableHiding: false,
		cell: ({ row }: CellContext<Payment, unknown>): JSX.Element => {
			const rowId = row.original.id;
			const handleDelete = (id: string): void => {
				setTableData((previous) => previous.filter((item) => item.id !== id));
			};
			return (
				<Button
					className="cursor-pointer"
					size="sm"
					variant="destructive"
					onClick={() => {
						handleDelete(rowId);
					}}
				>
					<Trash2 />
					Delete
				</Button>
			);
		},
	},
];

export default CardColumn;
