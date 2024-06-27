import type { IApplicationConfiguration } from "~/bootstrap/configuration/schema";

export const applicationConfiguration: IApplicationConfiguration = {
    color_mode: {
        default: "system",
        storage_key: "color-mode",
    },
};
