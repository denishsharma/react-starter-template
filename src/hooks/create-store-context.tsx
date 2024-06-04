import { type FC, type PropsWithChildren, type ReactNode, createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

import type { DeepPartial } from "~/types/generics";
import type { DefineStoreInstance, StoreInstance } from "~/utils/store";

export function createStoreContext<T, M>(instance: DefineStoreInstance<T, M>) {
    const StoreContext = createContext<StoreInstance<T, M> | null>(null);

    type StoreProviderProps = Readonly<{
        children: ReactNode;
        initial?: DeepPartial<T>;
    }>;

    function StoreProvider({ children, initial }: StoreProviderProps) {
        const storeRef = useRef<StoreInstance<T, M>>();
        if (!storeRef.current) {
            storeRef.current = instance(initial) as StoreInstance<T, M>;
        }

        return (
            <StoreContext.Provider value={storeRef.current}>
                {children}
            </StoreContext.Provider>
        );
    }

    function useStoreContext<K>(selector: (state: T & M) => K): K {
        const store = useContext(StoreContext);

        if (!store) {
            throw new Error("useStore must be used within a StoreProvider");
        }

        return useStore(store, selector);
    }

    function withStoreProvider<P extends PropsWithChildren>(component: FC<P>, initial?: DeepPartial<T>): FC<P> {
        const Component = component;

        return props => (
            <StoreProvider initial={initial}>
                <Component {...props} />
            </StoreProvider>
        );
    }

    return [StoreProvider, useStoreContext, withStoreProvider, StoreContext] as const;
}
