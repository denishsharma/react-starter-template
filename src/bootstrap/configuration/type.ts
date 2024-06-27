export type ConfigurationKey<T extends object> = {
    [K in keyof T & (string | number)]: T[K] extends any[]
        ? `${K}`
        : T[K] extends object
            ? `${K}` | `${K}.${ConfigurationKey<T[K]>}`
            : `${K}`;
}[keyof T & (string | number)];

export type ConfigurationKeyType<T extends object, P extends string> =
    P extends `${infer Key}.${infer Rest}`
        ? Key extends keyof T
            ? T[Key] extends object
                ? Rest extends ConfigurationKey<T[Key]>
                    ? ConfigurationKeyType<T[Key], Rest>
                    : never
                : never
            : never
        : P extends keyof T
            ? T[P]
            : never;
