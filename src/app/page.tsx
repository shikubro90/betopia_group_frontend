import CeoSection from "@/components/ceo-section";
import ChairmanSection from "@/components/chairman-section";
import ValuesSection from "@/components/core-beliefs";
import HeroSection from "@/components/hero-section";
import MotivationSection from "@/components/motivation-section";
import NavSection from "@/components/nav-section";
import VentureSection from "@/components/venture-section";

export default function RootPage() {
    return (
        <>
            <HeroSection />
            <NavSection />
            <MotivationSection />
            <ValuesSection />
            <ChairmanSection />
            <CeoSection />
            <VentureSection />
            {/* <VentureSectionV2 /> */}
        </>
    );
}
