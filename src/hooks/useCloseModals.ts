import { useEffect, type RefObject } from "react";

type CloseFunction = (value: boolean) => void;

const useCloseModals = (
	fn: CloseFunction,
	myRef: RefObject<HTMLElement | null>,
	backdropRef?: RefObject<HTMLElement | null>
): void => {
	useEffect(() => {
		const handleKeyDown = (event: globalThis.KeyboardEvent): void => {
			if (event.code === "Escape") {
				fn(false);
			}
		};

		const handleClose = (event: MouseEvent): void => {
			if (
				myRef.current &&
				backdropRef?.current &&
				!myRef.current.contains(event.target as Node) &&
				backdropRef?.current.contains(event.target as Node)
			) {
				fn(false);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		document.addEventListener("mousedown", handleClose);
		document.body.classList.add("body-scroll-lock");
		return (): void => {
			window.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("mousedown", handleClose);
			document.body.classList.remove("body-scroll-lock");
		};
	}, [fn, myRef, backdropRef]);
};

export default useCloseModals;
