import { type FC, type ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import useCloseModals from "../../hooks/useCloseModals";
// import { useTheme } from "../../utils/useTheme";

const modalRoot: Element | null = document.querySelector("#root-modal");

interface IProps {
	onClose: (value: boolean) => void;
	children: ReactNode;
}

const Modal: FC<IProps> = ({ onClose, children }) => {
	const modalRef = useRef<HTMLDivElement | null>(null);
	const backdropRef = useRef<HTMLDivElement | null>(null);
	useCloseModals(onClose, modalRef, backdropRef);

	// const { theme } = useTheme();

	return (
		modalRoot &&
		createPortal(
			<div ref={backdropRef} className="modal-backdrop">
				<div className="modal-container">
					<div
						ref={modalRef}
						className="modal"
						// className={`modal ${theme === "light" ? "" : "dark"}`}
						onClick={(event) => {
							event.stopPropagation();
						}}
					>
						<div>{children}</div>
					</div>
				</div>
			</div>,

			modalRoot
		)
	);
};

export default Modal;
