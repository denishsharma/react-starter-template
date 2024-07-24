import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { isProduction } from "std-env";

import { Whenever } from "~@/components/generics/whenever";
import { useColorMode } from "~@/hooks/use-color-mode";

const TanStackRouterDevtools = import.meta.env.PROD ? () => null : lazy(() => import("@tanstack/router-devtools").then(res => ({ default: res.TanStackRouterDevtools })));

export const Route = createRootRoute({
    beforeLoad: () => {
        withHead({
            htmlAttrs: {
                lang: "en",
            },
        });

        withSeoMeta({
            titleTemplate: title => (title ? `${title} | ${config().app("project.name")}` : config().app("project.name")),
            description: config().app("project.description"),
            keywords: config().app("project.keywords").join(","),
            ogTitle: config().app("project.name"),
            ogDescription: config().app("project.description"),
        });
    },
    component: RootLayout,
});

function RootLayout() {
    useColorMode();

    return (
        <>
            <Outlet />

            <Whenever condition={isProduction}>
                <Suspense>
                    <TanStackRouterDevtools />
                </Suspense>
                <ReactQueryDevtools />
            </Whenever>
        </>
    );
}
