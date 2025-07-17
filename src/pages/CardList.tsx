import { type JSX, Suspense, lazy } from "react";

const DataTable = lazy(() => import("../components/cards/DataTable"));

const CardList = (): JSX.Element => {
	return (
		<main className="p-6">
			<h1 className="text-3xl font-bold mb-6">My Cards</h1>
			<Suspense
				fallback={
					<div className="text-center text-gray-500 animate-pulse">
						Loading...
					</div>
				}
			>
				<DataTable />
			</Suspense>
		</main>
	);
};

export default CardList;
