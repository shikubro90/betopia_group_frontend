"use client";
import { ReadMore } from "@/components/cards/news-card";
import { useNewsById } from "@/services/requests/news";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LatestNews() {
    const latestNewsId = 8;
    const { data, isLoading } = useNewsById(String(latestNewsId));
    const router = useRouter();
    const image = data?.images.at(-1) || "/";

    if (isLoading) {
        return (
            <div className="bg-gray">
                <div className="max-w-7xl mx-auto xl:py-20 p-10 animate-pulse">
                    <div>
                        <div>
                            <div className="h-5 w-24 bg-gray-300 rounded"></div>
                            <div className="h-[1px] w-50 bg-gray-300 mt-2"></div>
                            <div className="h-10 w-40 bg-gray-300 mt-5 rounded"></div>
                        </div>

                        <div className="grid xl:grid-cols-5 mt-10 pb-20 xl:gap-30 gap-10">
                            {/* info column skeleton */}
                            <div className="col-span-2 space-y-5">
                                <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
                                <div className="space-y-2">
                                    <div className="h-4 w-full bg-gray-300 rounded"></div>
                                    <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
                                    <div className="h-4 w-4/6 bg-gray-300 rounded"></div>
                                </div>
                                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                            </div>

                            {/* image column skeleton */}
                            <div className="col-span-3">
                                <div className="w-full h-64 bg-gray-300 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className=" bg-gray">
            <div className=" max-w-7xl mx-auto xl:py-20 p-10">
                <div>
                    <div>
                        <h1 className=" text-orange_deep font-semibold">
                            Latest
                        </h1>
                        <div className="h-[1px] w-50 bg-gray_text"></div>
                        <h1 className=" mt-5 text-5xl font-extralight text-gray_text">
                            News
                        </h1>
                    </div>

                    <div className=" grid xl:grid-cols-5 mt-10 pb-20 xl:gap-30 gap-10">
                        {/* info column */}
                        <div className=" col-span-2 space-y-5">
                            <Link
                                className=""
                                href={`/news-and-stories/${data?.id}`}
                            >
                                <h1 className="text-xl text-orange_deep cursor-pointer">
                                    {data?.title}
                                </h1>
                            </Link>

                            <p className=" text-sm whitespace-pre-wrap  mt-5 text-gray_text  line-clamp-[16] text-justify">
                                {data?.description}
                            </p>

                            <ReadMore
                                onClick={() => {
                                    router.push(
                                        `/news-and-stories/${latestNewsId}`
                                    );
                                }}
                            />
                        </div>

                        {/* image column */}
                        <div className="col-span-3">
                            <Image
                                src={image}
                                height={400}
                                width={800}
                                alt="i"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
