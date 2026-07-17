import { graph } from "@graphrefly/ts/graph";

export function createApplicationGraph() {
	const app = graph({ name: "test-app" });
	const source = app.state(1, { name: "source" });
	const doubled = app.derived([source], (value) => value * 2, { name: "doubled" });
	app.derived([doubled], (value) => `value=${value}`, { name: "label" });
	return app;
}
