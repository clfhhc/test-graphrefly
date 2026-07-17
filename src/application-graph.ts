import { graph } from "@graphrefly/ts/graph";

export function createApplicationGraph() {
	const app = graph({ name: "test-app" });
	const source = app.state(1, { name: "source" });
	const scaled = app.derived([source], (value) => value * 3, { name: "scaled" });
	const label = app.derived([scaled], (value) => `value=${value}`, { name: "label" });
	const offset = app.derived([label], (value) => `${value};offset=1`, { name: "offset" });
	app.derived([offset], (value) => ({ report: value }), { name: "report" });
	return app;
}
