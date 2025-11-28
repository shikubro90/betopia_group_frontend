import { INewsItem } from "@/data/news";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useNews(page: number) {
    return useQuery({
        queryKey: ["news", page],
        queryFn: async () => {
            const { data } = await axios.get<{
                data: INewsItem[];
                limit: number;
                total: number;
                totalPages: number;
                page: number;
            }>(`/api/news?page=${page}&limit=6`);
            return data;
        },
    });
}

export const useNewsById = (id: string) => {
    return useQuery<INewsItem>({
        queryKey: ["news", id],
        queryFn: async () => {
            const res = await fetch(`/api/news/${id}`);
            if (!res.ok) throw new Error("News not found");
            return res.json();
        },
    });
};
