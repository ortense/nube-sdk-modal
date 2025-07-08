import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { Header } from "./components/Header";
import { setNubeSDK } from "./context";

export function App(nube: NubeSDK) {
	setNubeSDK(nube);

	nube.send("ui:slot:set", () => ({
		ui: {
			slots: {
				before_main_content: <Header />,
			},
		},
	}));
}
