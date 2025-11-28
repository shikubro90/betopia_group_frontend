"use client";
import { scrollToDivById } from "@/utils/dom";
import { MdArrowDropDown } from "react-icons/md";

export default function NavSection() {
    return (
        <div className="bg-white">
            <MdArrowDropDown
                onClick={() => {
                    scrollToDivById("core_beliefs");
                }}
                className=" text-gray-400 xl:text-7xl text-5xl mx-auto hover:translate-y-2 duration-300 cursor-pointer"
            />
        </div>
    );
}
