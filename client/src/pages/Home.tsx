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

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductDisplay />
      <SpecificationsSection />
      <VideoSection />
      <InstallationSection />
      <FaqSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
}
