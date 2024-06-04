import defu from "defu";
import { type StateCreator, create } from "zustand";

import type { DeepPartial } from "~/types/generics";

type StoreOf<T> = StateCreator<T, [], [["zustand/immer", never]]>;

export function defineStoreInstance<T, M>(store: (init: T) => StoreOf<T & M>, defaults?: DeepPartial<T>) {
    return (initial?: DeepPartial<T>) => {
        const state: T = defu(initial, defaults) as T;

        return create<T & M>()(store(state));
    };
}

export type DefineStoreInstance<T, M> = ReturnType<typeof defineStoreInstance<T, M>>;
export type StoreInstance<T, M> = ReturnType<ReturnType<typeof defineStoreInstance<T, M>>>;
