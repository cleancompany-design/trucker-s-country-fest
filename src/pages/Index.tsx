import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";

import LineupSection from "@/components/LineupSection";
import AnfahrtSection from "@/components/AnfahrtSection";
import InfoSection from "@/components/InfoSection";
import SponsorBanner from "@/components/SponsorBanner";
import FooterSection from "@/components/FooterSection";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HighlightsSection />
      
      <LineupSection />
      <AnfahrtSection />
      <InfoSection />
      <SponsorBanner />
      <FooterSection />
      <CookieBanner />
    </div>
  );
};

export default Index;
