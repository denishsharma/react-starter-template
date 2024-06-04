import type { ComponentPropsWithoutRef } from "react";

import { Counter } from "~/modules/welcome/components/counter";
import { Post } from "~/modules/welcome/components/post";
import { cn } from "~/utils/cn";

function SocialButtonLink({ className, children, ...props }: ComponentPropsWithoutRef<"a">) {
    return (
        <a
            target="_blank"
            className={cn("size-7 cursor-pointer flex items-center justify-center gap-x-2 border border-transparent rounded-lg bg-transparent text-sm transition active:(border-dark-300 bg-dark-400) hover:(bg-dark-200)", className)}
            {...props}
        >
            {children}
        </a>
    );
}

export function WelcomeFragment() {
    return (
        <div className="flex flex-col select-none items-center justify-center of-hidden b-revert bg-dark-800 text-light-50 min-h-dvh">
            <div className="absolute inset-0">
                <div className="size-full bg-[#99d3ff] bg-[radial-gradient(at_69%_33%,hsla(293,61%,79%,1)_0px,transparent_50%),radial-gradient(at_3%_1%,hsla(347,74%,68%,1)_0px,transparent_50%),radial-gradient(at_4%_88%,hsla(284,79%,64%,1)_0px,transparent_50%),radial-gradient(at_36%_19%,hsla(66,98%,72%,1)_0px,transparent_50%),radial-gradient(at_56%_25%,hsla(114,69%,78%,1)_0px,transparent_50%),radial-gradient(at_48%_22%,hsla(109,83%,63%,1)_0px,transparent_50%),radial-gradient(at_32%_61%,hsla(257,68%,62%,1)_0px,transparent_50%)]" />
                <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" />
            </div>

            <div className="relative h-fit max-w-sm w-full flex flex-col overflow-clip border border-dark-300 rounded-xl bg-dark-500/60 shadow-lg backdrop-blur-3xl divide-y divide-dark-300">
                <div className="flex items-center bg-dark-400/50 p-2.5">
                    <div className="size-8 flex select-none items-center justify-center rounded-lg bg-teal-800 text-sm font-bold leading-none">
                        <div className="i-teenyicons:react-outline size-5" />
                    </div>

                    <div className="ml-3 h-full flex flex-col select-none justify-center gap-y-1 leading-none">
                        <div className="text-sm font-medium leading-none">
                            React Starter Template
                        </div>

                        <a href="" className="text-xs text-light-50/60 leading-none transition active:(op-100) hover:(op-80)">
                            By
                            {" "}
                            <span className="underline underline-gray-500 underline-offset-2 underline-dashed">
                                Denish Sharma
                            </span>
                        </a>
                    </div>
                </div>

                <div className="p-2.5">
                    <Post />
                </div>

                <div className="p-2.5">
                    <Counter />
                </div>

                <div className="flex items-center justify-between py-1 pl-1.5 pr-2.5">
                    <div className="flex items-center">
                        <SocialButtonLink href="https://www.linkedin.com/in/denishsharma/">
                            <div className="i-mynaui:brand-linkedin size-4" />
                        </SocialButtonLink>

                        <SocialButtonLink href="https://github.com/denishsharma/react-starter-template/">
                            <div className="i-mynaui:brand-github size-4" />
                        </SocialButtonLink>
                    </div>

                    <div className="flex items-center">
                        <span className="h-5 flex items-center rounded bg-dark-300 px-2 text-xs text-light-50/60 font-medium">
                            &copy;
                            {" "}
                            {new Date().getFullYear()}
                            {" "}
                            Denish Sharma
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
