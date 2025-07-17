"use client";

import { type JSX, useState } from "react";

import {
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
	type ColumnFiltersState,
	type SortingState,
	type VisibilityState,
} from "@tanstack/react-table";

import { Table } from "../../../@/components/ui/table";
import { Button } from "../../../@/components/ui/button";
import initialData from "../../mockApi/mockData";
import Modal from "../../components/layout/Modal";
import type { Payment } from "@/types/type";

import CardColumn from "./CardColumn";
import FindForm from "../forms/FindForm";
import TableHeaderComponent from "./TableHeader";
import TableBodyComponent from "./TableBody";
import CreateCardModal from "./CreateCardModal";

function DataTable(): JSX.Element {
	const [tableData, setTableData] = useState<Array<Payment>>(initialData);
	const [openModal, setOpenModal] = useState(false);

	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = useState({});

	const table = useReactTable({
		data: tableData,
		columns: CardColumn(setTableData),
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	const openCreateCardModal = (): void => {
		setOpenModal(true);
		document.body.classList.add("body-scroll-lock");
	};

	const closeCreateCardModal = (): void => {
		setOpenModal(false);
		document.body.classList.remove("body-scroll-lock");
	};

	return (
		<>
			<div className="w-full">
				<div className="flex items-center py-4">
					<FindForm table={table} />
				</div>
				<div className="rounded-md border">
					<Table>
						<TableHeaderComponent table={table} />

						<TableBodyComponent table={table} />
					</Table>
				</div>
			</div>
			<Button
				className="cursor-pointer text-blue-400"
				variant="ghost"
				onClick={openCreateCardModal}
			>
				+ Create New
			</Button>

			{openModal && (
				<Modal onClose={closeCreateCardModal}>
					<CreateCardModal
						setTableData={setTableData}
						onClose={closeCreateCardModal}
					/>
				</Modal>
			)}
		</>
	);
}

export default DataTable;
