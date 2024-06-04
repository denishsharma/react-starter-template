import { useQuery } from "@tanstack/react-query";
import { debounce } from "perfect-debounce";
import { z } from "zod";

import { api } from "~/clients/api";

const postSchema = z.object({
    id: z.number(),
    title: z.string(),
    body: z.string(),
});

export function usePost(id: number) {
    return useQuery({
        queryKey: ["post", id],
        queryFn: debounce(async () => {
            const { data } = await api.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            return postSchema.parse(data);
        }, 500),
        enabled: !!id,
    });
}
