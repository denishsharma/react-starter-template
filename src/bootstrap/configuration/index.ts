import configuration from "~/configs";

import type { IConfiguration } from "~@configuration/schema";
import type { ConfigurationKey, ConfigurationKeyType } from "~@configuration/type";

/**
 * Utility functions for getting configuration values.
 *
 * To modify or add new configuration values, update the `src/bootstrap/configuration/schema.ts` file.
 * All configuration values are stored in the `src/config/index.ts` file.
 *
 * @returns Configuration utility functions.
 * @example
 * const { get, app, client } = config();
 * get("app.color_mode.default"); // => "light"
 * app("color_mode.default"); // => "light"
 * client("api.base_url"); // => "https://api.example.com"
 */
export function config<T extends IConfiguration>() {
    /**
     * Get a configuration value at the provided path.
     *
     * @param path The path to the configuration value.
     * @returns The configuration value at the provided path.
     * @example
     * config().get("app.color_mode.default"); // => "light"
     */
    function get<K extends ConfigurationKey<T>>(path: K) {
        const keys = path.split(".") as unknown as Array<keyof T>;
        let result: any = configuration;
        for (const key of keys) {
            if (result && typeof result === "object" && key in result) {
                result = result[key];
            } else {
                throw new Error(`Invalid path '${path}' for the provided config object.`);
            }
        }

        return result as unknown as ConfigurationKeyType<T, K>;
    }

    /**
     * Get a configuration value at the provided path under the app configuration.
     *
     * @param path The path to the configuration value.
     * @returns The configuration value at the provided path.
     * @example
     * config().app("color_mode.default"); // => "light"
     */
    function app<K extends ConfigurationKey<T["app"]>>(path: K) {
        return get(`app.${path}` as ConfigurationKey<T>) as ConfigurationKeyType<T["app"], K>;
    }

    /**
     * Get a configuration value at the provided path under the client configuration.
     *
     * @param path The path to the configuration value.
     * @returns The configuration value at the provided path.
     * @example
     * config().client("api.base_url"); // => "https://api.example.com"
     */
    function client<K extends ConfigurationKey<T["client"]>>(path: K) {
        return get(`client.${path}` as ConfigurationKey<T>) as ConfigurationKeyType<T["client"], K>;
    }

    return {
        get,
        app,
        client,
    };
}
