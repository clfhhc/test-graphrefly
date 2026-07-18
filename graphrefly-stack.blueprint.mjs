import { createHash } from "node:crypto";
import { withBlueprintHash } from "@graphrefly/ts/graph";
import * as graphModule from "./src/application-graph.ts";

const exportedGraph = graphModule["createApplicationGraph"];
if (exportedGraph === undefined) {
  throw new Error("Graph module does not export createApplicationGraph");
}
const applicationGraph = typeof exportedGraph === "function" ? await exportedGraph() : exportedGraph;
if (applicationGraph === null || typeof applicationGraph?.blueprint !== "function") {
  throw new Error("Configured export must be a Graph or a function returning a Graph");
}
const blueprint = withBlueprintHash(
  applicationGraph.blueprint({ diagnostics: true }),
  { algorithm: "sha256", hash: (bytes) => createHash("sha256").update(bytes).digest("hex") },
);
process.stdout.write(JSON.stringify(blueprint));
