import { type JSX, Suspense, lazy } from "react";
import SwitchThemeButtons from "../components/cards/SwitchThemeButtons";
import { useTheme } from "../hooks/useTheme";

const DataTable = lazy(() => import("../components/cards/DataTable"));

const CardList = (): JSX.Element => {
	const { theme } = useTheme();

	if (theme === "dark") {
		document.body.classList.add("dark");
	} else {
		document.body.classList.remove("dark");
	}

	return (
		<main className="p-6">
			<SwitchThemeButtons />
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
