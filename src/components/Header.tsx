import { Row } from "@tiendanube/nube-sdk-jsx";
import { ModalBye } from "./ModalBye";
import { ModalHello } from "./ModalHello";
import { OpenModalButton } from "./OpenModalButton";

export function Header() {
	return (
		<Row gap={2} padding={2}>
			<OpenModalButton modal={<ModalHello />} title="Abrir Modal Hello" />
			<OpenModalButton modal={<ModalBye />} title="Abrir Modal Bye" />
		</Row>
	);
}
