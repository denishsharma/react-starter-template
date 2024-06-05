import type { ConfigKeyOf } from "~/types/config";

import { getConfigValue } from "~/utils/config";

export interface AppConfig {
    base_url: string | undefined;
}

const config: AppConfig = {
    base_url: undefined,
};

export function getAppConfig<K extends ConfigKeyOf<typeof config>>(key: K) {
    return getConfigValue(config, key);
}
