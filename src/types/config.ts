export type ConfigKeyOf<T extends object> = {
    [K in keyof T & (string | number)]: T[K] extends any[]
        ? `${K}`
        : T[K] extends object
            ? `${K}` | `${K}.${ConfigKeyOf<T[K]>}`
            : `${K}`;
}[keyof T & (string | number)];

export type ConfigValueType<T, P extends string> =
    P extends `${infer Key}.${infer Rest}`
        ? Key extends keyof T
            ? T[Key] extends object
                ? Rest extends ConfigKeyOf<T[Key]>
                    ? ConfigValueType<T[Key], Rest>
                    : never
                : never
            : never
        : P extends keyof T
            ? T[P]
            : never;
