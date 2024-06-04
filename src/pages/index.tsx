import { createFileRoute } from "@tanstack/react-router";

import { WelcomeFragment } from "~/modules/welcome/welcome-fragment";

export const Route = createFileRoute("/")({
    component: HomePage,
});

function HomePage() {
    return (
        <WelcomeFragment />
    );
}
