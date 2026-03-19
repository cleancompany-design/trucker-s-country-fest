import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import LineupSection from "@/components/LineupSection";
import AnfahrtSection from "@/components/AnfahrtSection";
import InfoSection from "@/components/InfoSection";
import FooterSection from "@/components/FooterSection";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HighlightsSection />
      <ShowcaseSection />
      <LineupSection />
      <AnfahrtSection />
      <InfoSection />
      <FooterSection />
      <CookieBanner />
    </div>
  );
};

export default Index;
