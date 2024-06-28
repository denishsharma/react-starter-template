import { useEffect, useState } from "react";

import type { ReactNode } from "@tanstack/react-router";

type OnMountedProps = Readonly<{ children: ReactNode }>;

export function OnMounted({ children }: OnMountedProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return <>{mounted && children}</>;
}
