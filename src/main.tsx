import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/tailwind.css";
import "./styles/myStyles.css";
import "./common/i18n";
import ThemeProvider from "./theme/ThemeProvider.tsx";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);

root.render(
	<>
		<BrowserRouter basename="/">
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</>
);
