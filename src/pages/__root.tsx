import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { isProduction } from "std-env";

export const Route = createRootRoute({
    component: () => (
        <>
            <Outlet />
            {!isProduction && (
                <>
                    <TanStackRouterDevtools />
                    <ReactQueryDevtools />
                </>
            )}
        </>
    ),
});
