import "virtual:uno.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { ClickScrollPlugin, OverlayScrollbars } from "overlayscrollbars";
import React from "react";
import ReactDOM from "react-dom/client";

import { routeTree } from "~/../.generated/routeTree.gen";
import { RouteNotFound } from "~/components/route-not-found";

import "~/assets/styles/global.scss";

const router = createRouter({
    routeTree,
    defaultNotFoundComponent: RouteNotFound,
});

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

const queryClient = new QueryClient();

OverlayScrollbars.plugin(ClickScrollPlugin);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>,
);
