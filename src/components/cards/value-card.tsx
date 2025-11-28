"use client";
import Image from "next/image";
import { TValueItem } from "../core-beliefs";

export default function ValueCard(props: TValueItem) {
    const colorClasses = {
        red: "text-red",
        teal: "text-teal",
        cyan: "text-cyan",
        yellow: "text-yellow",
        orange: "text-orange",
    };
    const colorClass = colorClasses[props.color]; // Dynamic class based on color prop
    return (
        <div className=" flex flex-col w-[230px] pr-5 relative pb-20 mx-5 text-gray_text">
            <Image
                height={130}
                width={50}
                alt="icon"
                className="ml-auto h-[130px] w-[65px]  mr-10"
                src={props.image}
            />
            <h3 className={`my-2 text-[32px] pb-6 ${colorClass} `}>
                {props.label}
            </h3>
            <p className="my-2 text-[18px] font-medium">{props.title}</p>
            <p className="py-2 text-[18px] ">{props.description}</p>
        </div>
    );
}
