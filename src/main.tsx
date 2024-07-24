import "virtual:uno.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import { ClickScrollPlugin, OverlayScrollbars } from "overlayscrollbars";
import React from "react";
import ReactDOM from "react-dom/client";

import { query } from "~/clients/query";

import { Whenever } from "~@/components/generics/whenever";
import { router } from "~@/router";
import { initializeHead } from "~@/unhead";

import "~/assets/styles/global.scss";

initializeHead();

OverlayScrollbars.plugin(ClickScrollPlugin);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={query}>
            <RouterProvider router={router} />
        </QueryClientProvider>

        <Whenever condition={config().app("enable.analytics")}>
            <Analytics />
        </Whenever>
    </React.StrictMode>,
);
