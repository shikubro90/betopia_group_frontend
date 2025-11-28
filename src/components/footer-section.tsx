"use client";

import { scrollToDivById } from "@/utils/dom";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const InfoCard = (props: { icon: string; text: ReactNode }) => {
    return (
        <div className="flex items-start  gap-5  max-w-80">
            <Image
                height={5}
                width={5}
                alt="icon"
                className="w-5 "
                src={props.icon}
            />
            <p className=" text-sm text-gray_text">{props.text}</p>
        </div>
    );
};

const FootLinkCard = (props: {
    title: string;
    href: string;
    elId?: string;
}) => (
    <Link
        onClick={() => {
            if (props.elId) {
                const id = props.elId;
                setTimeout(() => {
                    scrollToDivById(id);
                }, 200);
            }
        }}
        href={props.href}
    >
        <p className="border-dashed border-b-2 text-gray_text border-gray-300 p-2 xl:text-center w-60 cursor-pointer hover:underline">
            {props.title}
        </p>
    </Link>
);

const col1Info = [
    {
        icon: "/message.svg",
        text: (
            <a className=" hover:underline" href="mailto:info@betopiagroup.com">
                info@betopiagroup.com
            </a>
        ),
    },
    {
        icon: "/map.svg",
        text: (
            <a
                target="_blank"
                className=" hover:underline"
                href="https://www.google.com/maps/place/Bdcalling+IT+Ltd.+-+Corporate+Office/@23.7657422,90.4267991,17z/data=!3m1!4b1!4m6!3m5!1s0x3755b9003ccd7a81:0x3ca84d00f53d8510!8m2!3d23.7657422!4d90.4267991!16s%2Fg%2F11wj97cbc0?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D"
            >
                Daisy Garden, House - 14 (3rd - floor), Main Road Block - A,
                Banasree, Dhaka-1219
            </a>
        ),
    },
    {
        icon: "/phone.svg",
        text: (
            <a className="hover:underline" href="tel:+8801332840800">
                +8801332840800
            </a>
        ),
    },
];

const col2Info = [
    {
        title: "Vision & Purpose",
        href: "/",
        elId: "vision_and_purpose",
    },
    {
        title: "Core Beliefs",
        href: "/",
        elId: "core_beliefs",
    },
    {
        title: "Impact & Responsibility",
        href: "/impact-and-responsibility",
    },
    {
        title: "News & Stories",
        href: "/news-and-stories",
    },
    {
        title: "Career",
        href: "/career",
    },
];

const socialLinks = [
    {
        icon: "/linkedin.svg",
        href: "https://www.linkedin.com/company/betopiagroup",
    },
    {
        icon: "/facebook.svg",
        href: "https://www.facebook.com/Betopia.Group",
    },
    {
        icon: "/x.svg",
        href: "https://x.com/BetopiaGroup",
    },
    {
        icon: "/youtube.svg",
        href: "https://www.youtube.com/@BetopiaGroup",
    },
    {
        icon: "/instagram.svg",
        href: "https://www.instagram.com/betopiagroup/?hl=en",
    },
];

export default function FooterSection() {
    const year = new Date().getFullYear();
    return (
        <div className=" bg-gray_strong py-20 pb-10 relative mt-auto z-50">
            <div className=" max-w-7xl mx-auto grid sm:grid-cols-3 gap-10 px-10 lg:px-0 ">
                <div className="">
                    {/* col1 */}
                    <Image
                        src={"/logo.svg"}
                        height={64}
                        width={180}
                        className="xl:w-60 w-40"
                        alt="betopiagroup_logo"
                    />
                    <div className=" mt-5">
                        <h3 className=" text-lg mb-3 text-gray_text">
                            Join Betopia Community
                        </h3>
                        <div className="flex  items-center   gap-2 ">
                            {socialLinks.map((x, i) => (
                                <Link
                                    key={i}
                                    href={x.href}
                                    target="_black"
                                    className=" hover:scale-110 duration-200"
                                >
                                    <Image
                                        alt="icon"
                                        src={x.icon}
                                        height={30}
                                        width={30}
                                        className=" select-none"
                                    />
                                </Link>
                            ))}
                        </div>

                        {/* <div
                            // onClick={() => {
                            //     scrollToDivById("header");
                            // }}
                            className=" x-cursor-pointer flex justify-center mt-10 items-center gap-2 border-b-2 pb-2 border-gray-300"
                        >
                            <div className=" bg-white p-2 h-fit w-fit rounded-lg">
                                <Image
                                    src={"/download.png"}
                                    height={20}
                                    width={20}
                                    alt="download"
                                />
                            </div>
                            <p className=" text-lg text-orange_deep">
                                Download Credential
                            </p>
                        </div> */}

                        <div className="mt-5 text-gray_text text-sm">
                            <a href="mailto:info@betopiagroup.com">
                                Copyright © {year} betopia group Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>

                {/* col2 */}
                <div className="flex flex-col  xl:items-center justify-center ">
                    {col2Info.map((x, i) => (
                        <FootLinkCard {...x} key={i} />
                    ))}
                </div>

                {/* col3 */}
                <div className=" flex justify-center">
                    <div>
                        <p className="font-bold pt-5 text-gray_text">
                            Reach Out
                        </p>
                        <div className=" space-y-2 mt-5">
                            {/* Info cards */}

                            {col1Info.map((x, idx) => (
                                <InfoCard {...x} key={idx} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Image
                onClick={() => {
                    scrollToDivById("header");
                }}
                className="hover:scale-90 mx-auto mt-10 hover:-translate-y-2 duration-500 cursor-pointer -rotate-90"
                src={"/polygon.webp"}
                alt="polygon"
                height={40}
                width={40}
            />
        </div>
    );
}
