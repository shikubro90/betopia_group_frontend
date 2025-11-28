"use client";

import NewsCard, { NewsCardSkeleton } from "@/components/cards/news-card";
import Pagination from "@/components/pagination";
import { INewsItem } from "@/data/news";
import { useNews } from "@/services/requests/news";
import { useState } from "react";

export default function NewsList() {
    const [page, setPage] = useState(1);
    const { data: newsRes, isLoading } = useNews(page);

    return (
        <div id="news_list" className=" bg-white">
            <div className=" max-w-7xl mx-auto xl:py-20 p-10">
                {/* List */}
                {isLoading || !newsRes ? (
                    <NewsListSkeleton />
                ) : newsRes?.data.length > 0 ? (
                    <NewsListContent list={newsRes?.data} />
                ) : null}
                {/* Pagination */}
                <Pagination
                    page={page}
                    onChange={setPage}
                    totalPages={newsRes?.totalPages || 0}
                />
            </div>
        </div>
    );
}

export const NewsListSkeleton = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-10 p-5 sm:p-10">
            {Array.from({ length: 6 }).map((_, i) => (
                <NewsCardSkeleton key={i} />
            ))}
        </div>
    );
};
export const NewsListContent = ({ list }: { list: INewsItem[] }) => {
    console.log(list, "LLII");
    return (
        <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-10 p-5 sm:p-10  ">
            {list.map((x, i) => (
                <NewsCard {...x} key={i} />
            ))}
        </div>
    );
};
