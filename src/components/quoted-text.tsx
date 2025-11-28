import Image from "next/image";
import { PropsWithChildren } from "react";

export default function QuotedText({
    variant = "orange",
    children,
}: PropsWithChildren<{ variant?: "gray" | "orange" }>) {
    const qImage = variant === "gray" ? "/qoute_gray.png" : "/qoute_orange.png";
    const uqImage =
        variant === "gray" ? "/unqoute_gray.png" : "/unqoute_orange.png";

    return (
        <blockquote className=" text-xl md:text-[24px]  xl:text-[40px] font-medium text-[#414042] leading-[-1.6px]  px-10">
            <Image
                src={qImage}
                alt="qoute_orange"
                height={50}
                width={50}
                className="w-[30px] inline-block mb-2  xl:w-[50px]  "
            />{" "}
            {children}
            <Image
                src={uqImage}
                alt="unqoute_orange"
                height={50}
                width={50}
                className=" inline-block  + ml-2 w-[30px] xl:w-[50px] "
            />
        </blockquote>
    );
}
