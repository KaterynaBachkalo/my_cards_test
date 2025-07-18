import { type ReactNode, useState } from "react";

import { ThemeContext } from "./ThemeContext";
import type { FunctionComponent } from "../common/types";

const ThemeProvider = ({
	children,
}: {
	children: ReactNode;
}): FunctionComponent => {
	const [theme, setTheme] = useState<"light" | "dark">(
		(localStorage.getItem("app-theme") as "light" | "dark") || "light"
	);

	const toggleTheme = (): void => {
		setTheme((previous) => {
			const newTheme = previous === "light" ? "dark" : "light";
			localStorage.setItem("app-theme", newTheme);

			document.body.classList.remove(previous);

			document.body.classList.add(newTheme);

			return newTheme;
		});
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
