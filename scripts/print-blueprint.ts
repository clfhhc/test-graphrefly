import { createApplicationGraph } from "../src/application-graph.ts";

const applicationGraph = createApplicationGraph();
const blueprint = applicationGraph.blueprint({ diagnostics: true });
process.stdout.write(`${JSON.stringify(blueprint, null, 2)}\n`);
