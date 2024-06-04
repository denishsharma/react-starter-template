const config = {
    base_url: undefined,
};

export function getAppConfig(key: keyof typeof config) {
    return config[key];
}
