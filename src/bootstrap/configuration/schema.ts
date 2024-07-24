import { z } from "zod";

import type { DeepReadonly } from "~@/types/generics";

const applicationConfigurationSchema = z.object({
    project: z.object({
        name: z.string(),
        description: z.string(),
        keywords: z.array(z.string()),
    }),
    enable: z.object({
        analytics: z.boolean(),
    }),
    color_mode: z.object({
        default: z.enum(["light", "dark", "system"]),
        storage_key: z.string(),
    }),
});

const clientConfigurationSchema = z.object({
    api: z.object({
        base_url: z.string(),
    }),
});

export const configurationSchema = z.object({
    app: applicationConfigurationSchema,
    client: clientConfigurationSchema,
});

export type IApplicationConfiguration = z.infer<typeof applicationConfigurationSchema>;
export type IClientConfiguration = z.infer<typeof clientConfigurationSchema>;
export type IConfiguration = DeepReadonly<z.infer<typeof configurationSchema>>;
