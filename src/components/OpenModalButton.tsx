import { Button } from "@tiendanube/nube-sdk-jsx";
import type { NubeComponent } from "@tiendanube/nube-sdk-types";
import { useNubeSDK } from "../context";

export type OpenModalButtonProps = {
	modal: NubeComponent;
	title: string;
};

export function OpenModalButton({ modal, title }: OpenModalButtonProps) {
	const nube = useNubeSDK();

	const onClick = () => {
		nube.send("ui:slot:set", () => ({
			ui: {
				slots: {
					modal_content: modal,
				},
			},
		}));
	};

	return (
		<Button variant="primary" onClick={onClick}>
			{title}
		</Button>
	);
}
