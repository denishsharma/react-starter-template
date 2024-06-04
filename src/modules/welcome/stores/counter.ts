import { immer } from "zustand/middleware/immer";

import { createStoreContext } from "~/hooks/create-store-context";
import { defineStoreInstance } from "~/utils/store";

interface State {
    count: number;
}

interface Actions {
    increment: () => void;
}

const counterStoreInstance = defineStoreInstance<State, Actions>((init) => {
    return immer(set => ({
        ...init,
        increment: () => set((state) => {
            state.count += 1;
        }),
    }));
}, { count: 0 });

export const [CounterStoreProvider, useCounterStore] = createStoreContext<State, Actions>(counterStoreInstance);
