"use client";
import { scrollToDivById } from "@/utils/dom";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export default function Pagination({
    page,
    totalPages,
    onChange,
}: {
    totalPages: number;
    page: number;
    onChange: (page: number) => void;
}) {
    const prevEnabled = page - 1 > 0;
    const nextEnabled = page + 1 <= totalPages;

    return (
        <div className=" flex justify-center items-center gap-5 py-10">
            <IoMdArrowDropleft
                onClick={() => {
                    if (prevEnabled) {
                        onChange(page - 1);
                        setTimeout(() => {
                            scrollToDivById("news_list");
                        }, 200);
                    }
                }}
                size={40}
                className={`text-gray-400 cursor-pointer ${
                    prevEnabled ? "opacity-100" : "opacity-40"
                }`}
            />

            <div className=" flex gap-5 items-center ">
                {Array.from({ length: totalPages }).map((x, i) => {
                    return (
                        <p
                            onClick={() => {
                                onChange(i + 1);
                                setTimeout(() => {
                                    scrollToDivById("news_list");
                                }, 200);
                            }}
                            className={`text-3xl cursor-pointer hover:text-gray-500 ${
                                i + 1 === page
                                    ? "text-orange_deep"
                                    : "text-gray_strong"
                            }`}
                            key={i}
                        >
                            {i + 1}
                        </p>
                    );
                })}
            </div>

            <IoMdArrowDropright
                onClick={() => {
                    if (nextEnabled) {
                        onChange(page + 1);
                        setTimeout(() => {
                            scrollToDivById("news_list");
                        }, 200);
                    }
                }}
                size={40}
                className={`text-gray-400 cursor-pointer ${
                    nextEnabled ? "opacity-100" : "opacity-40"
                }`}
            />
        </div>
    );
}
