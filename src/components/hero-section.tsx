import Image from "next/image";

export default function HeroSection() {
    return (
        <div>
            <Image
                alt="limitless_together"
                height={616}
                width={1600}
                className="w-full xl:h-[85vh] h-full object-cover  "
                src={"/concept_1.jpg"}
                // src={"/limitless_together.png"}
            />
        </div>
    );
}
