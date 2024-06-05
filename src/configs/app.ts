import type { ConfigKeyOf } from "~/types/config";

import { getConfigValue } from "~/utils/config";

export interface AppConfig {
    base_url: string | undefined;
    color_mode: {
        default: "light" | "dark" | "system";
        storage_key: string;
    };
}

const config: AppConfig = {
    base_url: undefined,
    color_mode: {
        default: "system",
        storage_key: "color-mode",
    },
};

export function getAppConfig<K extends ConfigKeyOf<typeof config>>(key: K) {
    return getConfigValue(config, key);
}
