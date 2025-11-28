import Image from "next/image";
import ValueCard from "./cards/value-card";

export type TValueItem = {
    image: string;
    label: string;
    title: string;
    description: string;
    color: "red" | "teal" | "cyan" | "yellow" | "orange";
};
export default function ValuesSection() {
    const data: TValueItem[] = [
        {
            image: "/integrity.png",
            label: "Integrity",
            title: "Doing the right thing, always.",
            color: "red",
            description:
                "We act with consistency and fairness in every decision and interaction. Our commitment to ethical behavior builds trust and drives lasting impact.",
        },
        {
            image: "/courage.png",
            label: "Courage",
            color: "teal",
            title: "Taking bold steps to move forward.",
            description:
                "We embrace challenges with a fearless mindset, taking decisive action that inspires confidence. By stepping into the unknown, we create opportunities for growth and unlock potential in others.",
        },
        {
            color: "cyan",
            image: "/compassion.png",
            label: "Compassion",
            title: "Understanding with empathy, acting    with care.",
            description:
                "We go beyond ourselves to listen, connect and respond to the needs of others. By fostering a culture of kindness and support, we help people thrive.",
        },
        {
            image: "/curiosity.png",
            label: "Curiosity",
            color: "yellow",
            title: "Fueling innovation through questions and exploration.",
            description:
                "We nurture a culture of continuous learning and open-minded discovery. Every idea begins with a question and every question can spark something transformative.",
        },
        {
            image: "/collaboration.png",
            label: "Collaboration",
            color: "orange",
            title: "Achieving success, together.",
            description:
                "We believe great things happen when we work as one. By uniting diverse talents around a shared vision, we amplify impact and move forward collectively.",
        },
    ];
    return (
        <div
            id="core_beliefs"
            className="min-h-screen flex justify-center items-center py-10 relative bg-white"
        >
            <Image
                src={"/polygon.webp"}
                alt="polygon"
                height={38}
                width={44}
                className="absolute top-[-25px] xl:left-79 left-[80px]"
            />
            <div className="">
                <h1 className=" text-center text-[30px] xl:text-[40px] py-20 text-gray_text ">
                    Core beliefs
                </h1>

                <div className="relative flex flex-col xl:flex-row justify-center px-20">
                    {data?.map((x, idx) => (
                        <div key={x.label} className=" relative">
                            <div className=" xl:hidden">
                                {/* mobile view */}
                                {idx % 2 == 0 ? (
                                    <DividerLineRight position={"bottom"} />
                                ) : (
                                    <DividerLineLeft position={"top"} />
                                )}
                            </div>
                            <div className="hidden xl:block">
                                {idx !== 0 && (
                                    <DividerLineLeft
                                        position={
                                            idx % 2 == 0 ? "bottom" : "top"
                                        }
                                    />
                                )}
                            </div>
                            <ValueCard key={x.label} {...x} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const DividerLineLeft = ({ position }: { position: "top" | "bottom" }) =>
    position === "top" ? (
        <div className="h-[295px] w-[1px] bg-gray-400 absolute -left-4  top-20 "></div>
    ) : (
        <div className="h-[295px] w-[1px] bg-gray-400 absolute -left-4 bottom-0 "></div>
    );
const DividerLineRight = ({ position }: { position: "top" | "bottom" }) =>
    position === "top" ? (
        <div className="h-[295px] w-[1px] bg-gray-400 absolute -right-4  top-20 "></div>
    ) : (
        <div className="h-[295px] w-[1px] bg-gray-400 absolute -right-4 bottom-0 "></div>
    );
