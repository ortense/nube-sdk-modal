import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { useDynamicClock } from "./components/Clock";
import { Header } from "./components/Header";

export function App(nube: NubeSDK) {
	useDynamicClock(nube, "before_line_items");

	nube.send("ui:slot:set", () => ({
		ui: {
			slots: {
				before_main_content: <Header nube={nube} />,
			},
		},
	}));
}
