import { Box, Text } from "@tiendanube/nube-sdk-jsx";
import type { NubeSDK, UISlot } from "@tiendanube/nube-sdk-types";
import { StyleSheet, theme } from "@tiendanube/nube-sdk-ui";

const styles = StyleSheet.create({
	container: {
		padding: "15px",
		backgroundColor: theme.color.main.foreground,
		borderRadius: theme.border.radius,
	},
	time: {
		fontSize: "16px",
		color: theme.color.main.background,
		fontWeight: "bold",
		textAlign: "center",
		width: "100%",
	},
});

export function ClockDisplay() {
	const time = new Date().toLocaleTimeString("pt-BR", { hour12: false });

	return (
		<Box style={styles.container}>
			<Text style={styles.time}>{time}</Text>
		</Box>
	);
}

export function useDynamicClock(nube: NubeSDK, slot: UISlot) {
	const render = () => {
		nube.send("ui:slot:set", () => ({
			ui: {
				slots: {
					[slot]: <ClockDisplay />,
				},
			},
		}));
	};

	setInterval(() => {
		render();
	}, 1000);
}
