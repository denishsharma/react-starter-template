import { random } from "radash";
import { useState } from "react";

import { usePost } from "~/modules/welcome/queries/use-post";
import { cn } from "~/utils/cn";

export function Post() {
    const [id, setId] = useState(random(1, 20));

    const { data, isFetching } = usePost(id);

    const randomize = () => setId(random(1, 20));

    return (
        <div className="flex flex-col pb-0.5">
            <div>
                <div className="text-sm font-bold">TanStack React Query</div>
                <div className="text-sm text-gray-500">Random post from jsonplaceholder API</div>
            </div>

            <div className="mt-2 border border-dark-300 rounded-lg bg-dark-800 p-3 light:(border-gray-300 bg-light-600)">
                {data && (
                    <div className="mb-3">
                        <div className="line-clamp-1 mb-1 pr-10 text-sm font-medium">{data.title}</div>
                        <div className="line-clamp-3 pr-1 text-xs op-50">{data.body}</div>
                    </div>
                )}
                <button
                    type="button"
                    data-loading={isFetching}
                    className={cn(
                        "group h-8 w-full flex items-center justify-center border border-dark-200 rounded-lg bg-dark-300/50 px-2 text-center light:(hover:(bg-light-500) active:(bg-light-50 border-gray-300) bg-light-50 border-gray-300) text-sm transition active:(bg-dark-400) hover:(bg-dark-300)",
                        "data-[loading=true]:(animate-pulse)",
                    )}
                    onClick={randomize}
                >
                    <span className="i-svg-spinners:270-ring mr-2 hidden size-4 scale-90 op-0 transition group-data-[loading=true]:(block scale-100 op-100)" />
                    <span>Randomize</span>
                </button>
            </div>
        </div>
    );
}
