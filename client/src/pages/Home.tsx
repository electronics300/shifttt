import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ProductDisplay } from "@/components/ProductDisplay";
import { SpecificationsSection } from "@/components/SpecificationsSection";
import { VideoSection } from "@/components/VideoSection";
import { InstallationSection } from "@/components/InstallationSection";
import { FaqSection } from "@/components/FaqSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/AboutSection";

export default function Home() {
  const showHero = true;
  const showProductDisplay = false;
  const showFeatures = false;
  const showSpecifications = false;
  const showInstallation = false; // Hidden
  const showVideo = false;        // Hidden
  const showAbout = false;
  const showFaq = false;
  const showWaitlist = true;

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {showHero && <HeroSection />}
      {showProductDisplay && <ProductDisplay />}
      {showFeatures && <FeaturesSection />}
      {showSpecifications && <SpecificationsSection />}
      {showInstallation && <InstallationSection />}
      {showVideo && <VideoSection />}
      {showAbout && <AboutSection />}
      {showFaq && <FaqSection />}
      {showWaitlist && <WaitlistSection />}
      <Footer />
    </div>
  );
}
