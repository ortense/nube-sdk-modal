import type { NubeSDK } from "@tiendanube/nube-sdk-types";

type Context = {
	nube?: NubeSDK;
};

const context: Context = {
	nube: undefined,
};

export function setNubeSDK(nube: NubeSDK) {
	context.nube = nube;
}

export function useNubeSDK(): NubeSDK {
	const nube = context.nube;

	if (!nube) {
		throw new Error("Nube SDK not initialized");
	}

	return nube;
}
