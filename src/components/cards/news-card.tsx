"use client";
import { INewsItem } from "@/data/news";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaCirclePlus } from "react-icons/fa6";
export const ReadMore = (props: { onClick: () => void }) => (
    <div
        onClick={props.onClick}
        className=" flex items-center gap-3 hover:opacity-50 cursor-pointer duration-300 w-fit text-base text-gray_text"
    >
        <FaCirclePlus color="#ed2d45" />
        <p className=" ">Read More</p>
    </div>
);

export default function NewsCard(props: INewsItem) {
    const cardImage = props.images[1] ?? props.images[0];
    const router = useRouter();

    return (
        <div className=" space-y-5">
            <Image
                className="w-full object-cover h-48"
                height={200}
                width={400}
                alt="hello"
                src={cardImage}
            />
            <Link className="" href={`/news-and-stories/${props.id}`}>
                <h1 className=" text-2xl line-clamp-2 text-gray_text cursor-pointer">
                    {props.title}
                </h1>
            </Link>
            <p className=" line-clamp-4 mt-5 text-sm font-extralight text-gray_text">
                {props.description}
            </p>
            <ReadMore
                onClick={() => {
                    router.push(`/news-and-stories/${props.id}`);
                }}
            />
        </div>
    );
}

export const NewsCardSkeleton = () => {
    return (
        <div className="space-y-5 animate-pulse">
            {/* Image placeholder */}
            <div className="w-full h-48 bg-gray-200 rounded-md" />

            {/* Title placeholder */}
            <div className="h-6 bg-gray-200 rounded w-3/4" />

            {/* Description placeholder (4 lines) */}
            <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
                <div className="h-4 bg-gray-200 rounded w-4/6" />
                <div className="h-4 bg-gray-200 rounded w-3/6" />
            </div>

            {/* Read More placeholder */}
            <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gray-200 rounded-full" />
                <div className="h-4 bg-gray-200 rounded w-20" />
            </div>
        </div>
    );
};
