import { useCallback, useEffect, useMemo } from "react";
import { useLocalStorage, useMedia } from "react-use";

type ColorMode = "light" | "dark" | "system";

export function useColorMode() {
    const systemPrefersDark = useMedia("(prefers-color-scheme: dark)");

    const systemPreference: "dark" | "light" = useMemo(() => systemPrefersDark ? "dark" : "light", [systemPrefersDark]);

    const [_mode, _setMode] = useLocalStorage(config().app("color_mode.storage_key"), (config().app("color_mode.default") === "system" ? systemPreference : config().app("color_mode.default")) as ColorMode);

    const setColorMode = useCallback((mode: ColorMode) => {
        _setMode(mode === "system" ? systemPreference : mode);
    }, [_setMode, systemPreference]);

    useEffect(() => {
        const modeToSet = _mode === "system" ? systemPreference : (_mode ?? "light");
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(modeToSet);
        document.documentElement.style.colorScheme = modeToSet;

        const handleMediaChange = (e: MediaQueryListEvent) => {
            _setMode(e.matches ? "dark" : "light");
        };

        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handleMediaChange);

        return () => {
            if (_mode === "system") {
                window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", handleMediaChange);
            }
        };
    }, [_mode, _setMode, systemPreference]);

    const resolvedMode: "light" | "dark" = useMemo(() => _mode === "system" ? systemPreference : (_mode ?? "light"), [_mode, systemPreference]);

    const toggleColorMode = useCallback(() => {
        setColorMode(resolvedMode === "light" ? "dark" : "light");
    }, [resolvedMode, setColorMode]);

    return useMemo(() => ({ mode: _mode, setColorMode, resolvedMode, toggleColorMode }), [_mode, resolvedMode, setColorMode, toggleColorMode]);
}
