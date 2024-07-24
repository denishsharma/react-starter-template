import { useColorMode } from "~@/hooks/use-color-mode";
import { cn } from "~@/utils/cn";

export function ThemeToggle() {
    const { resolvedMode, toggleColorMode } = useColorMode();

    return (
        <button
            type="button"
            onClick={toggleColorMode}
            className="size-8 flex cursor-pointer items-center justify-center gap-x-2 border border-transparent rounded-lg bg-transparent text-sm outline-none transition active:(border-dark-300 bg-dark-400) hover:(bg-dark-200) light:active:(border-gray-300 bg-light-50) light:hover:(bg-light-50)"
        >
            <span className={cn(
                resolvedMode === "dark" ? "i-mynaui:moon" : "i-mynaui:sun",
                "size-5 transition",
            )}
            />
        </button>
    );
}
