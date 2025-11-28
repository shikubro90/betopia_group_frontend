"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 z-40 right-6 p-3 rounded-full  hover:text-white shadow-lg bg-black/40  transition-all duration-300"
                >
                    <Image
                        className=" mx-auto  size-5 object-contain duration-500 cursor-pointer -rotate-90"
                        src={"/polygon.webp"}
                        alt="polygon"
                        height={40}
                        width={40}
                    />
                </button>
            )}
        </>
    );
}
