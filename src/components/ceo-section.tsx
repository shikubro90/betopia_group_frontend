import Image from "next/image";
import QuotedText from "./quoted-text";

const CeoSection = () => {
    return (
        <section id="ceos_message" className="bg-gray py-20 z-10 relative  ">
            <Image
                src={"/polygon.webp"}
                alt="polygon"
                height={38}
                width={44}
                className="absolute top-[-25px] left-[80px] xl:left-79"
            />
            <div className="flex flex-col-reverse xl:flex-row justify-center items-center gap-5 xl:gap-20 px-5 md:px-10 xl:px-20 ">
                <div className="mt-15 ">
                    <div className="md:w-[350px] xl:w-[550px] xl:ml-auto  relative">
                        <QuotedText variant="gray">
                            Empowering people is <br /> not just our path to{" "}
                            <br />
                            progress — {`it’s`} how we <br /> stay limitless,
                            together.
                        </QuotedText>
                    </div>
                    <div className="lg:w-[335px]  xl:w-[480px] px-2 xl:px-8 mt-15 text-justify  ">
                        <p className="text-[18px] font-light leading-[26px] tracking-wide py-5 text-gray_text ">
                            {`At Betopia Group, we believe true growth begins with
                            people. Our journey has always been shaped by those
                            who dream big and work with purpose. We continue to
                            embrace passionate individuals, providing them with
                            the support to grow, contribute, and thrive.`}
                        </p>
                        <p className="text-[18px] font-light leading-[26px] tracking-wide pb-15 text-gray_text">
                            {`Grounded in our values and guided by integrity, we
                            are now preparing to explore new possibilities —
                            from financial technology to internet services, real
                            estate, ready-made garments, and
                            business-to-business solutions. Each step is part of
                            a greater vision to build a future aligned with
                            immense opportunity.`}
                        </p>
                        <p className="text-[18px] font-light leading-[26px] tracking-wide pb-15 text-gray_text">
                            {`Because when we move with shared purpose and belief
                            in one another, our possibilities are not just
                            broad/vast — they are truly limitless, together.`}
                        </p>
                        <h5 className="text-[18px] font-bold leading-[26px]  text-gray_text">
                            {`Muhammad Monir Hossain`}
                        </h5>
                        <h4 className="text-[18px] font-light leading-[26px]  text-gray_text">
                            {`Group CEO, Betopia Group`}
                        </h4>
                    </div>
                </div>
                <div className=" relative py-10 xl:py-0">
                    <Image
                        src={"/potrait_back_triangle_gray_bg.png"}
                        alt="potrait_back_triangle_gray_bg"
                        height={500}
                        width={500}
                        className="absolute left-[-100px] bottom-[-80px] w-full h-full z-[-10px] "
                    />
                    <div className="flex flex-col items-start  h-full relative z-[50px]">
                        <Image
                            src={"/ceo_betopia.png"}
                            alt="triangle_right"
                            height={750}
                            width={750}
                            className=""
                        />
                    </div>
                </div>
            </div>

            <Image
                src={"/polygon.webp"}
                alt="polygon"
                height={38}
                width={44}
                className="absolute bottom-[-25px]   left-[80px] xl:left-79"
            />
        </section>
    );
};

export default CeoSection;
