type Primitive = string | number | boolean | null | undefined;

export type ConfigurationKey<T extends object> = {
    [K in keyof T & (string | number)]: T[K] extends Primitive
        ? `${K}`
        : T[K] extends Array<any> | ((...args: any[]) => any)
            ? `${K}`
            : T[K] extends object
                ? `${K}` | `${K}.${ConfigurationKey<Omit<T[K], keyof any[]>>}`
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
