import { useTheme } from "../../hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import type { FunctionComponent } from "../../common/types";

const SwitchThemeButtons = (): FunctionComponent => {
	const { theme, toggleTheme } = useTheme();

	const myToggleThemeLight = (): void => {
		if (theme === "dark") toggleTheme();
	};

	const myToggleThemeDark = (): void => {
		if (theme === "light") toggleTheme();
	};

	return (
		<div className="switch-buttons">
			<button
				className="switch-button"
				type="button"
				onClick={myToggleThemeLight}
			>
				<Sun className={`switch-icon ${theme === "light" ? "white" : ""} `} />
			</button>
			<button
				className="switch-button"
				type="button"
				onClick={myToggleThemeDark}
			>
				<Moon className={`switch-icon ${theme === "light" ? "" : "light"} `} />
			</button>
		</div>
	);
};

export default SwitchThemeButtons;
