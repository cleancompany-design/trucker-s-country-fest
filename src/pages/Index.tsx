import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import FomoBlock from "@/components/FomoBlock";
import InfoSection from "@/components/InfoSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HighlightsSection />
      <ShowcaseSection />
      <FomoBlock />
      <InfoSection />
      <FooterSection />
    </div>
  );
};

export default Index;
