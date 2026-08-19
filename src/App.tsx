import { Navbar, HeroSection, QuoteSection } from "./components/HeroParts";
import { InfoSection } from "./components/InfoSection";
import { VideoGallery } from "./components/VideoGallery";
import { BackedBySection } from "./components/BackedBySection";
import { UseCasesSection } from "./components/UseCasesSection";
import { PricingSection } from "./components/PricingSection";
import { TestimonialCarousel } from "./components/TestimonialCarousel";
import { ProjectsSection } from "./components/ProjectsSection";
import { PartnerSection } from "./components/PartnerSection";
import { Footer } from "./components/Footer";
import { CopyrightBar } from "./components/CopyrightBar";
import { BottomNav } from "./components/BottomNav";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-screen overflow-hidden flex flex-col relative">
        <Navbar />
        <HeroSection />
      </div>
      <QuoteSection />
      <InfoSection />
      <VideoGallery />
      <BackedBySection />
      <UseCasesSection />
      <PricingSection />
      <TestimonialCarousel />
      <ProjectsSection />
      <PartnerSection />
      <Footer />
      <CopyrightBar />
      <BottomNav />
    </div>
  );
}
