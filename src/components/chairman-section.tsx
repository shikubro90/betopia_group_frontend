import Image from "next/image";
import QuotedText from "./quoted-text";

const ChairmanSection = () => {
    return (
        <section
            id="world_from_leadership"
            className="bg-orange py-20 z-10 relative  "
        >
            <Image
                src={"/polygon.webp"}
                alt="polygon"
                height={38}
                width={44}
                className="absolute top-[-25px] left-[80px] xl:left-79"
            />
            <div className="flex flex-col xl:flex-row  justify-center items-center  xl:grid-cols-2 gap-5 xl:gap-20 px-5 md:px-10 xl:px-20 ">
                <div className=" relative ">
                    <Image
                        src={"/potrait_back_triangle_bg.png"}
                        alt="potrait_back_triangle_bg"
                        height={500}
                        width={500}
                        className="absolute  left-0 -top-25 w-full"
                    />
                    <div className="flex flex-col items-end justify-center  relative z-10">
                        <Image
                            src={"/chairman_betopia.png"}
                            alt="triangle_right"
                            height={650}
                            width={650}
                            className=" "
                        />
                    </div>
                </div>
                <div className="mt-15 ">
                    <div className="md:w-[360px]  xl:w-[550px] relative">
                        <QuotedText>
                            True prosperity begins <br /> when we unlock <br />{" "}
                            potential and grow <br /> limitless, together.
                        </QuotedText>
                    </div>
                    <div className="lg:w-[335px]  xl:w-[480px] px-2 xl:px-8 mt-15 text-justify ">
                        <p className="text-[18px] font-light leading-[26px] tracking-wide py-5 text-gray_text ">
                            {
                                " At Betopia Group, we believe human potential is the\
                            most powerful force behind progress. Our vision is\
                            to nurture that potential, especially among the\
                            youth, so we can shape a society that grows with\
                            confidence and purpose."
                            }
                        </p>
                        <p className="text-[18px] font-light leading-[26px] tracking-wide pb-15 text-gray_text">
                            {`Since starting our journey in 2014, we have steadily
                            expanded our horizons with the goal of creating new
                            opportunities, supporting job growth, and
                            contributing to the country's economic development.
                            We believe that true prosperity is achieved when we
                            unlock possibilities and move forward limitless,
                            together.`}
                        </p>
                        <h5 className="text-[18px] font-bold leading-[26px]  text-gray_text">
                            Sabina Akter
                        </h5>
                        <h4 className="text-[18px] font-light leading-[26px]  text-gray_text">
                            Chairman, Betopia Group
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChairmanSection;
