import { Column, Text } from "@tiendanube/nube-sdk-jsx";

export function ModalHello() {
	return (
		<Column>
			<Text heading={1}>Hello!!</Text>
			<Text>This is a modal</Text>
		</Column>
	);
}
