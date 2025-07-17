import { Navigate, Route, Routes } from "react-router-dom";
import { type JSX, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const CardList = lazy(() => import("./pages/CardList"));

function App(): JSX.Element {
	return (
		<>
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<CardList />} path="my-cards" />
				<Route element={<Navigate to="/" />} path="*" />
			</Routes>
		</>
	);
}

export default App;
