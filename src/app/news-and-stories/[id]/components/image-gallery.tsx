"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";

const images = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
    "/gallery/7.jpg",
];

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: { slidesToShow: 3, slidesToScroll: 1, dots: true },
        },
        {
            breakpoint: 600,
            settings: { slidesToShow: 2, slidesToScroll: 1, initialSlide: 2 },
        },
        {
            breakpoint: 480,
            settings: { slidesToShow: 1, slidesToScroll: 1 },
        },
    ],
};

export const ImageGallery = () => {
    const [currentImage, setCurrentImage] = useState("/gallery/1.jpg");
    const sliderRef = useRef<Slider | null>(null);

    return (
        <div className="max-w-7xl mx-auto  space-y-10 py-10 relative">
            <div className="relative">
                {!!currentImage && (
                    <Image
                        src={currentImage}
                        height={1000}
                        width={1000}
                        alt="l"
                        className="w-3/4 aspect-video object-cover  mx-auto"
                    />
                )}
                <div className="">
                    <div className="relative mt-10 mx-10">
                        <IoMdArrowDropleft
                            size={40}
                            className="text-gray-400 cursor-pointer absolute -left-10 top-1/2 -translate-y-1/2"
                            onClick={() => sliderRef.current?.slickPrev()}
                        />
                        <Slider ref={sliderRef} {...settings}>
                            {images?.map((x, i) => (
                                <div
                                    onClick={() => {
                                        setCurrentImage(x);
                                    }}
                                    key={i}
                                    className="relative group"
                                >
                                    <Image
                                        src={x}
                                        width={200}
                                        height={100}
                                        className="h-20 w-full object-contain"
                                        alt={x}
                                    />
                                </div>
                            ))}
                        </Slider>
                        <IoMdArrowDropright
                            onClick={() => sliderRef.current?.slickNext()}
                            size={40}
                            className="text-gray-400 cursor-pointer absolute top-1/2 -right-10 -translate-y-1/2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
