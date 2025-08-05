import ExploreSection from "@/components/ExploreSection";
import FlightInputsSection from "@/components/FlightInputsSection";
import HeroSection from "@/components/HeroSection";

export default function page() {
  return (
    <div className="flex flex-col gap-10 items-center bg-headerBg mt-16">
      <HeroSection />
      <div className="w-full md:w-[90%] lg:w-[70%] px-5 space-y-5">
        {/* <div>inputs container</div> */}
        <FlightInputsSection />

        {/* <div>explore destination area</div> */}
        <ExploreSection />

        <div>places to go with pictures area</div>

        <div>useful tools area</div>

        <div>popular destination area</div>

        <div>faq section</div>

        <div>find cheap flights on popular routes section</div>
      </div>
    </div>
  );
}
