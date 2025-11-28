"use client";
import ReactPlayer from "react-player";
import FormValidation from "./form-validation";

const CarrierPage = () => {
    const description = `Betopia – Where Your Talent Meets Our Vision
    
At Betopia, we believe real growth comes from working together with purpose. Our goal is to build a community where people can unlock their potential and contribute to something meaningful.

We’re not just building businesses. We’re creating opportunities, encouraging new ideas, and shaping an environment where everyone has the chance to thrive.

Our values—integrity, curiosity, collaboration, compassion and courage—guide how we work and grow.

We’ve created a culture where ideas are welcomed, initiative is encouraged and every voice matters. At Betopia, you’re more than an employee. You’re part of a team shaping what comes next. We value ownership, honest conversation and bold thinking.

Join us. Not just to take part, but to help build something better.
Your talent meets our vision. Together, there’s no limit.`;

    return (
        <section
            id="contact_us"
            className="relative py-10 bg-[url('/carrier/carrier_bg.jpg')] bg-cover"
        >
            <div className="absolute inset-0 bg-black/70 h-full bg-cover"></div>

            <div className="max-w-7xl  relative mx-auto z-20 p-5 ">
                <div className="text-center md:py-20 py-5">
                    <h1 className="text-white text-3xl font-light ">
                        Work Where You Grow
                    </h1>
                </div>
                <div className="grid grid-cols-1  gap-10 ">
                    <div className=" mt-3">
                        <ImageCarousel />

                        <div className="py-2  mx-auto">
                            <p className=" text-white text-sm md:text-xl   md:text-justify   whitespace-pre-wrap">
                                {description}
                            </p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="xl:w-[500px] ">
                        <FormValidation />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarrierPage;

const ImageCarousel = () => {
    const imageList = [
        "/carrier/ci_2.jpg",
        "/carrier/ci_1.jpg",
        "/carrier/ci_2.jpg",
        "/carrier/ci_3.jpg",
        "/carrier/ci_4.jpg",
    ];
    return (
        <div className="w-full">
            <ReactPlayer
                style={{ width: "full", height: "full" }}
                controls
                className="object-cover aspect-video  mx-auto h-full my-5 w-full "
                src="https://www.youtube.com/watch?v=taPB5JBh_L8"
            />
        </div>
    );
};
