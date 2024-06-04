import { CounterStoreProvider, useCounterStore } from "~/modules/welcome/stores/counter";

function CounterButton() {
    const [count, increment] = useCounterStore(s => [s.count, s.increment]);

    return (
        <button type="button" onClick={increment} className="h-8 w-full select-none border border-dark-200 rounded-lg bg-dark-300/50 px-2 text-sm transition active:(bg-dark-400) hover:(bg-dark-300)">
            Count:
            {" "}
            {count}
        </button>
    );
}

export function Counter() {
    return (
        <div className="flex flex-col pb-0.5">
            <div>
                <div className="text-sm font-bold">Zustand Store</div>
                <div className="text-sm text-gray-500">
                    Counter example using Zustand store at component level with initial count value
                </div>
            </div>

            <div className="mt-2 border border-dark-300 rounded-lg bg-dark-800 p-3">
                <div className="grid grid-cols-2 gap-x-2">
                    <CounterStoreProvider initial={{ count: 0 }}>
                        <CounterButton />
                    </CounterStoreProvider>

                    <CounterStoreProvider initial={{ count: 10 }}>
                        <CounterButton />
                    </CounterStoreProvider>
                </div>

                <div className="mt-3 text-center text-xs text-gray-500">
                    This counter is using Zustand store at component level. Each counter is independent of each other.
                </div>
            </div>
        </div>
    );
}
