import type { Dispatch, JSX, SetStateAction } from "react";
import type {
	CellContext,
	ColumnDef,
	HeaderContext,
} from "@tanstack/react-table";
import { Trash2 } from "lucide-react";

import { Button } from "../../../@/components/ui/button";
import HeaderButton from "../ui/HeaderButton";
import DefaultRow from "./DefaultRow";
import type { Payment } from "../../common/types";

import visaImg from "../../img/visa.png";
import mastercardImg from "../../img/mastercard.png";
import amexImg from "../../img/amex.png";

const CardColumn = (
	setTableData: Dispatch<SetStateAction<Array<Payment>>>
): Array<ColumnDef<Payment>> => [
	{
		accessorKey: "brand",
		header: ({ column }: HeaderContext<Payment, unknown>): JSX.Element => {
			return <HeaderButton column={column} text="Brand" />;
		},
		cell: ({ row }) => (
			<div>
				{row.getValue("brand") === "visa" ? (
					<img alt="visa" src={visaImg} width={50} />
				) : row.getValue("brand") === "mastercard" ? (
					<img alt="mastercard" src={mastercardImg} width={50} />
				) : (
					<img alt="amex" src={amexImg} width={50} />
				)}
			</div>
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
		header: () => <h2 className="header-title">Default</h2>,
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
				<DefaultRow
					handleSelectDefault={handleSelectDefault}
					isDefault={isDefault}
					rowId={rowId}
				/>
			);
		},
	},
	{
		id: "actions",
		header: () => <h2 className="header-title">Action</h2>,
		enableHiding: false,
		cell: ({ row }: CellContext<Payment, unknown>): JSX.Element => {
			const rowId = row.original.id;
			const handleDelete = (id: string): void => {
				setTableData((previous) => previous.filter((item) => item.id !== id));
			};
			return (
				<Button
					className="cursor-pointer button-delete"
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
