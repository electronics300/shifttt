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
import { AboutSection } from "@/components/AboutSection"; // Import the AboutSection component

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <ProductDisplay />
      <FeaturesSection />
      <SpecificationsSection />
      <InstallationSection />
      <VideoSection />
      <AboutSection /> {/* Added AboutSection */}
      <WaitlistSection />
      <Footer />
    </div>
  );
}