import Image from "next/image";

export default function MotivationSection() {
    return (
        <div className="w-full relative ">
            <div className=" grid grid-cols-1 xl:grid-cols-2">
                <div className="w-full p-5 md:p-10 text-center md:text-left bg-cyan md:px-20  md:pl-40  relative md:space-y-10 xl:pt-30  lg:h-screen ">
                    <p
                        className="
                text-white text-xl leading-8  xl:leading-20 sm:text-4xl xl:text-6xl lg:w-140 font-bold"
                    >
                        We are here to <br className="xl:inline hidden" />
                        unleash the human <br className="xl:inline hidden" />
                        potential for a <br className="xl:inline hidden" />{" "}
                        prosperous society
                    </p>
                    <Image
                        src={"/triangle_right.png"}
                        alt="triangle_right"
                        height={400}
                        width={400}
                        className="hidden lg:block  w-60 h-80   absolute -bottom-10  left-79 "
                    />
                    <Image
                        src={"/polygon.webp"}
                        alt="polygon"
                        height={38}
                        width={44}
                        className=" absolute opacity-0 xl:opacity-100  -bottom-6 xl:left-79 z-10"
                    />
                </div>
                <div className="h-full">
                    <Image
                        height={850}
                        width={1600}
                        alt="walking_on_crowded_road"
                        // src={"/walking_on_crowded_road.png"}
                        src={"/concept_2.jpg"}
                        className="w-full xl:h-screen object-cover"
                    />
                </div>
            </div>
            <div className=" flex flex-col-reverse xl:grid  xl:grid-cols-2">
                <div id={"brand_manifesto"} className="h-full w-full">
                    <Image
                        height={850}
                        width={1600}
                        alt="holding_hands_on_sky"
                        // src={"/holding_hands_on_sky.png"}
                        src={"/concept_3.jpg"}
                        className="w-full xl:h-screen object-cover"
                    />
                </div>
                <div
                    id="vision_and_purpose"
                    className="w-full  p-5 md:p-10 text-center md:text-left bg-gray_strong xl:px-20 items-center justify-center xl:justify-start  flex  relative md:space-y-10 xl:p-30  lg:h-screen  "
                >
                    <div className="xl:w-10/12  w-full py-5 xl:py-10  space-y-10 xl:leading-12 text-[18px] xl:text-[32px] z-10  text-gray_text font-light">
                        <p>
                            {`We believe in the boundless potential of humanity.
                            In a world full of talent and opportunities, we see
                            a gap – a disconnect between those seeking growth
                            and the means to achieve it.`}
                        </p>
                        <p>
                            {`At Betopia Group, we empower individuals and
                            businesses to unleash their brilliance towards a
                            prosperous society.`}
                        </p>
                    </div>

                    <Image
                        src={"/triangle_left.png"}
                        alt="triangle_right"
                        height={400}
                        width={400}
                        className="hidden lg:block  w-60 h-100   absolute -bottom-30  right-80   "
                    />
                </div>
            </div>
        </div>
    );
}
