import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { isProduction } from "std-env";

import { useColorMode } from "~/hooks/use-color-mode";

const TanStackRouterDevtools = import.meta.env.PROD ? () => null : lazy(() => import("@tanstack/router-devtools").then(res => ({ default: res.TanStackRouterDevtools })));

export const Route = createRootRoute({
    component: RootLayout,
});

function RootLayout() {
    useColorMode();

    return (
        <>
            <Outlet />
            {!isProduction && (
                <>
                    <Suspense>
                        <TanStackRouterDevtools />
                    </Suspense>
                    <ReactQueryDevtools />
                </>
            )}
        </>
    );
}
