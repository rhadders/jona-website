// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

// Alle pagina's worden op de server gerenderd (node-adapter), zodat de
// middleware in src/middleware.ts elke aanvraag kan controleren op de
// toegangscode. Zonder die beveiliging kan dit terug naar output: "static".
export default defineConfig({
  site: "https://jonatechnologie.nl",
  output: "server",
  adapter: node({ mode: "standalone" }),
  server: { host: true, port: 4321 },
  build: { inlineStylesheets: "auto" },
});
