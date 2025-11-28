"use client";
import Image from "next/image";
import { ReactNode } from "react";
import CountUp from "react-countup";
type TImpactItem = {
    length: number;
    description: string;
    icon: ReactNode;
};
const ImpactCard = ({ icon, length, description }: TImpactItem) => {
    return (
        <div className="flex flex-2/6  gap-5     ">
            <div className="">{icon}</div>
            <div className=" ">
                <span className="text-white text-[40px] xl:text-[80px] w-[500px]">
                    <CountUp
                        start={10}
                        end={length}
                        duration={2.75}
                        separator=" "
                        decimals={0}
                        decimal=","
                        // prefix=""
                        suffix=" +"
                        onEnd={() => console.log("Ended! 👏")}
                        onStart={() => console.log("Started! 💨")}
                    />
                </span>
                <p className="text-white text-[12px] xl:text-[16px] w-[265px]">
                    {description}
                </p>
            </div>
        </div>
    );
};
const data: TImpactItem[] = [
    {
        length: 3000,
        description:
            "jobs created from engineers to designers, we’ve helped people build real careers doing what they love",
        icon: (
            // <Image className="text-white text-[40px] xl:text-[50px] mt-4 xl:mt-7" />
            <Image
                src={"/ImpactCard_03.png"}
                alt="ImpactCard_03"
                height={80}
                width={80}
                className="text-white mt-4 xl:mt-7"
            />
        ),
    },
    {
        length: 10000,
        description:
            "interns trained through our incubator training programs, gaining hands-on experience that opens real doors",
        icon: (
            <Image
                src={"/ImpactCard_02.png"}
                alt="ImpactCard_02"
                height={80}
                width={80}
                className="text-white text-[40px] xl:text-[50px] mt-4 xl:mt-7 "
            />
        ),
    },
    {
        length: 450,
        description:
            "laptops and computers donated to schools, students, and communities that they need most",
        icon: (
            <Image
                src={"/ImpactCard_01.png"}
                alt="ImpactCard_01"
                height={80}
                width={80}
                className="text-white text-[40px] xl:text-[50px] mt-4 xl:mt-7"
            />
        ),
    },
    {
        length: 100,
        description:
            "workshops and training sessions held—focused on real-world skills, from coding to communication",
        icon: (
            <Image
                src={"/ImpactCard_04.png"}
                alt="ImpactCard_04"
                height={80}
                width={80}
                className="text-white text-[40px] xl:text-[50px] mt-4 xl:mt-7"
            />
        ),
    },
];

const ImpactResponsibility = () => {
    return (
        <section className="py-20 Impact_bg relative min-h-screen">
            <div className="max-w-7xl py-5 px-3 xl:px-5  mx-auto  ">
                <div className="flex flex-col items-center justify-center  ">
                    <h1 className="text-[20px] xl:text-[40px] text-white font-light py-5">
                        Impact & Responsibility
                    </h1>
                    <p className="text-[14px] sm:w-[310px] xl:w-full text-center xl:text-[20px] text-white font-light">
                        We believe in building more than just tech —we’re here
                        to create opportunities and give back.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 place-items-center xl:place-items-start  gap-5 py-10">
                    {data?.map((x, i) => (
                        <ImpactCard {...x} key={i} />
                    ))}
                </div>
            </div>
            <Image
                src={"/impact_icon_left.png"}
                alt="impact_icon_left"
                height={1000}
                width={1000}
                className="absolute left-[-10px] w-80 top-1/2 -translate-y-1/2  "
            />
            <Image
                src={"/polygon.webp"}
                alt="polygon"
                height={38}
                width={44}
                className="absolute bottom-[-25px] xl:botton-[20px] left-[80px] xl:left-[255px] z-10"
            />
        </section>
    );
};

export default ImpactResponsibility;
