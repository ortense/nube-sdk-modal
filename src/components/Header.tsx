import { Row } from "@tiendanube/nube-sdk-jsx";
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { ModalBye } from "./ModalBye";
import { ModalHello } from "./ModalHello";
import { OpenModalButton } from "./OpenModalButton";

export type HeaderProps = { nube: NubeSDK };

export function Header({ nube }: HeaderProps) {
	return (
		<Row gap={2} padding={2}>
			<OpenModalButton
				nube={nube}
				modal={<ModalHello />}
				title="Abrir Modal Hello"
			/>
			<OpenModalButton
				nube={nube}
				modal={<ModalBye />}
				title="Abrir Modal Bye"
			/>
		</Row>
	);
}
