import { Button } from "@tiendanube/nube-sdk-jsx";
import type { NubeComponent, NubeSDK } from "@tiendanube/nube-sdk-types";

export type OpenModalButtonProps = {
	nube: NubeSDK;
	modal: NubeComponent;
	title: string;
};

export function OpenModalButton({ nube, modal, title }: OpenModalButtonProps) {
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
