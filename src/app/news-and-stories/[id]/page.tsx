"use client";

import NewsCard from "@/components/cards/news-card";
import { useNews, useNewsById } from "@/services/requests/news";
import { format, parse } from "date-fns";
import Image from "next/image";
import React, { useState } from "react";

export default function NewsDetails({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const [activeImage, setActiveImage] = useState("");
    const { id } = React.use(params);
    const { data: listRes, isLoading: isListLoading } = useNews(1);
    const { data, isLoading } = useNewsById(id);

    const parsedDate = data
        ? parse(data?.createdAt, "dd-M-yyyy", new Date())
        : null;

    if (isLoading || isListLoading) {
        return (
            <div className="max-w-7xl py-20 mx-auto animate-pulse">
                <div className="flex flex-col xl:flex-row justify-between py-10 gap-10 p-10">
                    <div className="xl:w-[800px] w-full mx-auto space-y-4">
                        <div className="h-8 bg-gray-300 rounded w-2/3"></div>
                        <div className="flex gap-5">
                            <div className="h-5 w-32 bg-gray-300 rounded"></div>
                            <div className="h-5 w-40 bg-gray-300 rounded"></div>
                        </div>
                        <div className="w-full h-96 bg-gray-300 rounded"></div>
                        <div className="h-20 bg-gray-300 rounded mt-5"></div>
                        <div className="grid xl:grid-cols-3 gap-2 mt-5">
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={i}
                                    className="h-40 w-full bg-gray-300 rounded"
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className="sm:w-[300px] space-y-5">
                        <div className="h-8 bg-gray-300 rounded w-1/2"></div>
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="h-40 w-full bg-gray-300 rounded"
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (!data) return null;

    return (
        <div className="bg-white text-gray_text">
            <div className="max-w-7xl py-20 mx-auto">
                <div className="flex flex-col xl:flex-row justify-between py-10 gap-10 p-10 ">
                    <div className=" xl:w-[800px] w-full mx-auto ">
                        <div>
                            <h1 className="text-[25px] font-bold ">
                                {data?.title}
                            </h1>
                            <div className="flex gap-15 text-[18px] py-3">
                                {/* <h5 className="text-[18px] tracking-wide ">
                                    betopiagroup
                                </h5> */}
                                <span>
                                    {parsedDate
                                        ? format(parsedDate, "dd-MMMM-yyyy")
                                        : null}
                                </span>
                            </div>
                            <Image
                                src={data?.images?.[0]}
                                alt="image"
                                height={1000}
                                width={1000}
                                className="top-[850px] xl:top-[774px] left-[80px] 
                            xl:left-[255px] z-10"
                            />
                            <div>
                                <p className="py-10 whitespace-pre-line">
                                    {data?.description}
                                </p>
                            </div>
                            <div className="grid xl:grid-cols-3 place-items-center gap-2">
                                {data?.images
                                    .filter((x, i) => i !== 0)
                                    .map((x, i) => (
                                        <Image
                                            onClick={() => {
                                                setActiveImage(x);
                                            }}
                                            key={i}
                                            height={1000}
                                            width={1000}
                                            src={x}
                                            alt=""
                                            className="xl:h-40 xl:w-60 object-cover cursor-pointer"
                                        />
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="text-[25px] font-bold space-y-10 sm:w-[300px]">
                        <h1 className="">Related news</h1>
                        <div className="flex flex-col justify-center gap-5">
                            {listRes?.data
                                ?.filter((x) => String(x.id) !== id)
                                ?.map((x) => (
                                    <NewsCard key={x.id} {...x} />
                                ))}
                        </div>
                    </div>
                </div>

                {activeImage && (
                    <div
                        className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
                        onClick={() => setActiveImage("")}
                    >
                        <Image
                            src={activeImage}
                            alt=""
                            width={1000}
                            height={1000}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
