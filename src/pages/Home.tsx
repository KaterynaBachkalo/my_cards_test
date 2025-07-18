import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import type { FunctionComponent } from "../common/types";

const Home = (): FunctionComponent => {
	const { t, i18n } = useTranslation();

	const onTranslateButtonClick = async (): Promise<void> => {
		if (i18n.resolvedLanguage === "en") {
			await i18n.changeLanguage("es");
		} else {
			await i18n.changeLanguage("en");
		}
	};

	return (
		<div className="bg-blue-300 font-bold w-screen h-screen flex flex-col justify-center items-center">
			<p className="text-white text-6xl">{t("home.greeting")}</p>
			<button
				className="hover:cursor-pointer"
				type="submit"
				onClick={onTranslateButtonClick}
			>
				translate
			</button>
			<Link className="text-orange-400 text-4xl" to="/my-cards">
				Go to cards
			</Link>
		</div>
	);
};

export default Home;
