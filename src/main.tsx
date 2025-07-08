import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { Header } from "./components/Header";

export function App(nube: NubeSDK) {
	nube.send("ui:slot:set", () => ({
		ui: {
			slots: {
				before_main_content: <Header nube={nube} />,
			},
		},
	}));
}
