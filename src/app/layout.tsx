import FooterSection from "@/components/footer-section";
import Header from "@/components/header";
import Providers from "@/components/providers";
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ScrollToTop from "@/components/scroll-to-top";
const myriadPro = localFont({
    src: "../../public/fonts/MyriadPro-Regular.otf",
    variable: "--font-myriad",
    display: "swap",
});

const outfit = localFont({
    src: "../../public/fonts/Outfit-VariableFont_wght.ttf",
    variable: "--font-outfit",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Betopia Group - limitless, together",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${outfit.variable} ${myriadPro.variable} text-gray_text  antialiased`}
            >
                <Providers>
                    <ScrollToTop />
                    <Header />
                    {children}
                    <FooterSection />
                </Providers>
            </body>
        </html>
    );
}
