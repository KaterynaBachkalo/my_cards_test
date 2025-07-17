import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/tailwind.css";
import "./styles/myStyles.css";
import "./common/i18n";
// import MyThemeProvider from "./contexts/ThemeProvider.tsx";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);

root.render(
	<>
		<BrowserRouter basename="/">
			{/* <MyThemeProvider> */}
			<App />
			{/* </MyThemeProvider> */}
		</BrowserRouter>
	</>
);
