import { TanStackRouterVite as tanStackRouter } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";
import unocss from "unocss/vite";
import autoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

import { URL, fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [{ find: "~", replacement: fileURLToPath(new URL("./src", import.meta.url)) }],
    },
    plugins: [
        unocss(),
        tanStackRouter({
            quoteStyle: "double",
            routesDirectory: "./src/pages",
            generatedRouteTree: "./.generated/routeTree.gen.ts",
            experimental: {
                enableCodeSplitting: true,
            },
            semicolons: true,
        }),
        react(),
        svgr({
            include: "**/*.svg",
            svgrOptions: {
                plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
            },
        }),
        autoImport({
            dts: "./.generated/auto-imports.d.ts",
            include: [/\.[jt]sx?$/],
            imports: [
                {
                    from: "~/../src/bootstrap/configuration",
                    imports: ["config"],
                },
            ],
        }),
    ],
});
