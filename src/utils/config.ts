import type { ConfigKeyOf, ConfigValueType } from "~/types/config";

export function getConfigValue<T extends object, K extends ConfigKeyOf<T>>(config: T, path: K) {
    const keys = path.split(".") as unknown as Array<keyof T>;
    let result: any = config;
    for (const key of keys) {
        if (result && typeof result === "object" && key in result) {
            result = result[key];
        } else {
            throw new Error(`Invalid path '${path}' for the provided config object.`);
        }
    }

    return result as unknown as ConfigValueType<T, K>;
}
