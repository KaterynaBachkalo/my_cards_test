import type { JSX } from "react";
import {
	RadioGroup,
	RadioGroupItem,
} from "../../../@/components/ui/radio-group";

interface DefaultCardRadioProps {
	rowId: string;
	isDefault: boolean;
	handleSelectDefault: (id: string) => void;
}

const DefaultRow = ({
	rowId,
	isDefault,
	handleSelectDefault,
}: DefaultCardRadioProps): JSX.Element => {
	return (
		<RadioGroup
			value={isDefault ? rowId : ""}
			onValueChange={() => {
				handleSelectDefault(rowId);
			}}
		>
			<div className="flex items-center gap-2">
				<RadioGroupItem id={`radio-${rowId}`} value={rowId} />
				<label
					className="text-sm text-muted-foreground"
					htmlFor={`radio-${rowId}`}
				>
					{isDefault ? "Default" : ""}
				</label>
			</div>
		</RadioGroup>
	);
};

export default DefaultRow;
