"use client";
import { ventureList } from "@/data/ventures";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { Swiper as SwiperType } from "swiper";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// const settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 1000,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 5, // default for big screens
//     slidesToScroll: 1,
//     responsive: [
//         {
//             breakpoint: 1376, // ≤1024px
//             settings: { slidesToShow: 4, slidesToScroll: 1 },
//         },
//         {
//             breakpoint: 1024, // ≤1024px
//             settings: { slidesToShow: 3, slidesToScroll: 1 },
//         },
//         {
//             breakpoint: 800, // ≤800px
//             settings: { slidesToShow: 2, slidesToScroll: 1 },
//         },
//         {
//             breakpoint: 480, // ≤480px
//             settings: { slidesToShow: 1, slidesToScroll: 1 },
//         },
//     ],
// };

// export function VentureSectionV2() {
//     const [hoverIndex, setHoverIndex] = useState<number | null>(null);
//     const sliderRef = useRef<Slider | null>(null);

//     return (
//         <div className="bg-white">
//             <div id="sbu" className="max-w-7xl mx-auto py-30 space-y-10 ">
//                 <h1 className=" text-4xl xl:text-5xl text-center font-light text-gray_text">
//                     Ventures
//                 </h1>

//                 <div className="relative mt-10 mx-10">
//                     <IoMdArrowDropleft
//                         size={40}
//                         className="text-gray-400 absolute -left-10 top-1/2 -translate-y-1/2 cursor-pointer"
//                         onClick={() => sliderRef.current?.slickPrev()}
//                     />
//                     <Slider ref={sliderRef} {...settings}>
//                         {ventureList?.map((x, i) => (
//                             <div
//                                 key={i}
//                                 className="relative group  py-10"
//                                 onMouseEnter={() => setHoverIndex(i)}
//                                 onMouseLeave={() => setHoverIndex(null)}
//                             >
//                                 {hoverIndex === i && (
//                                     <div className=" overflow-x-auto absolute inset-0 z-10 flex items-center justify-center bg-gray text-black text-center p-5 rounded transition-opacity duration-300">
//                                         {x.description}
//                                     </div>
//                                 )}
//                                 <VentureCard image={x.image} label={x.label} />
//                             </div>
//                         ))}
//                     </Slider>
//                     <IoMdArrowDropright
//                         onClick={() => sliderRef.current?.slickNext()}
//                         size={40}
//                         className="text-gray-400 absolute -right-10 top-1/2 -translate-y-1/2 cursor-pointer"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }

const VentureCard = ({ image, label }: { image: string; label: string }) => {
    return (
        <div className="flex h-40 justify-center items-center bg-white rounded relative">
            <Image
                src={image}
                alt={label}
                width={200}
                height={100}
                className="object-contain"
            />
        </div>
    );
};

export default function VentureSection() {
    const [hoverIndex, setHoverIndex] = useState<null | number>(null);
    const swiperRef = useRef<SwiperType | null>(null); // ✅ typed ref

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-20 space-y-10 ">
                <h1 className="xl:text-5xl text-2xl text-center font-light text-gray_text">
                    Ventures
                </h1>

                <div className="relative mt-10  ">
                    {/* Prev Button */}
                    <IoMdArrowDropleft
                        size={40}
                        className="text-gray-400 absolute -left-0 top-1/2 -translate-y-1/2 cursor-pointer z-10"
                        onClick={() => swiperRef.current?.slidePrev()}
                    />
                    <div className="mx-10">
                        <Swiper
                            autoplay={{
                                delay: 1000, // 3s per slide
                                disableOnInteraction: false, // keeps autoplay after user interaction
                                pauseOnMouseEnter: true, // pause when hovering
                            }}
                            loop
                            modules={[A11y, Autoplay, Navigation]}
                            spaceBetween={30}
                            speed={500}
                            slidesPerGroup={1}
                            breakpoints={{
                                320: { slidesPerView: 1 }, // mobile
                                640: { slidesPerView: 2 }, // small tablets
                                768: { slidesPerView: 3 }, // tablets
                                1024: { slidesPerView: 4 }, // small desktops
                            }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {ventureList?.map((x, i) => (
                                <SwiperSlide key={i}>
                                    <div
                                        className="relative group py-10"
                                        onMouseEnter={() => setHoverIndex(i)}
                                        onMouseLeave={() => setHoverIndex(null)}
                                    >
                                        {hoverIndex === i && (
                                            <Link
                                                href={x.href!}
                                                target="_blank"
                                            >
                                                <div className="overflow-x-auto text-left absolute inset-0 z-10 flex items-center justify-center bg-gray text-black  p-5 rounded transition-opacity duration-300">
                                                    {x.description}
                                                </div>
                                            </Link>
                                        )}
                                        <VentureCard
                                            image={x.image}
                                            label={x.label}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {/* Next Button */}
                    <IoMdArrowDropright
                        size={40}
                        className="text-gray-400 absolute -right-0 top-1/2 -translate-y-1/2 cursor-pointer z-10"
                        onClick={() => swiperRef.current?.slideNext()}
                    />
                </div>
            </div>
        </div>
    );
}

// export default function VentureSection() {
//     const [hoverIndex, setHoverIndex] = useState<number | null>(null);
//     const sliderRef = useRef<Slider | null>(null);

//     return (
//         <div className="max-w-7xl mx-auto py-20 space-y-10 bg-white">
//             <h1 className="xl:text-5xl text-center font-light">Ventures</h1>

//             <div className="relative mt-10 bg-white">
//                 <IoMdArrowDropleft
//                     size={40}
//                     className="text-gray-400 absolute -left-10 top-55 cursor-pointer"
//                     onClick={() => sliderRef.current?.slickPrev()}
//                 />
//                 <Slider ref={sliderRef} {...settings}>
//                     {ventureList?.map((x, i) => (
//                         <div
//                             key={i}
//                             className="relative group  pt-40"
//                             onMouseEnter={() => setHoverIndex(i)}
//                             onMouseLeave={() => setHoverIndex(null)}
//                         >
//                             {hoverIndex === i && (
//                                 <div className="absolute inset-0 bottom-30 z-10 flex items-center justify-center bg-orange_deep text-white text-center p-4 rounded transition-opacity duration-300">
//                                     {x.description}
//                                 </div>
//                             )}
//                             <VentureCard image={x.image} label={x.label} />
//                         </div>
//                     ))}
//                 </Slider>
//                 <IoMdArrowDropright
//                     onClick={() => sliderRef.current?.slickNext()}
//                     size={40}
//                     className="text-gray-400 absolute -right-20 top-55 cursor-pointer"
//                 />
//             </div>
//         </div>
//     );
// }
