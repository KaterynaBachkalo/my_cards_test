import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import type { IContextTheme } from "../types/type";

export const useTheme = (): IContextTheme => {
	const context = useContext(ThemeContext);

	if (!context) throw new Error("No context");

	return context;
};
