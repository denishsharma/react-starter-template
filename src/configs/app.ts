import { isProduction } from "std-env";

import type { IApplicationConfiguration } from "~@/configuration/schema";

export const applicationConfiguration: IApplicationConfiguration = {
    project: {
        name: "React Starter Template",
        description: "Minimal React starter template with Vite, TypeScript, UnoCSS, and Zustand.",
        keywords: ["react", "vite", "typescript", "unocss", "zustand", "starter", "template"],
    },
    enable: {
        analytics: isProduction,
    },
    color_mode: {
        default: "system",
        storage_key: "color-mode",
    },
};
