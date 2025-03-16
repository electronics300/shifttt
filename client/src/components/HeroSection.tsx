import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for the header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-between overflow-hidden pt-16 pb-8">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&q=80"
          alt="High-performance motorcycle in motion"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Center content */}
      <div className="flex-1 flex flex-col justify-center z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl md:text-7xl font-medium mb-4 text-white">
            QuickShift Pro
          </h1>
          <p className="text-xl text-white/90 font-light mb-12">
            0% APR Financing Ending March 31
          </p>
          
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div>
              <p className="text-2xl md:text-3xl font-medium text-white">15 ms</p>
              <p className="text-sm text-white/70">Response Time</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-medium text-white">360°</p>
              <p className="text-sm text-white/70">Detection Angle</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-medium text-white">AWD</p>
              <p className="text-sm text-white/70">Compatibility</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom action buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="z-10 container mx-auto px-4"
      >
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-4">
            <p className="text-xl md:text-2xl font-medium text-white">15 ms</p>
            <p className="text-sm text-white/70 font-light">Response Time</p>
          </div>
          <div className="p-4">
            <p className="text-xl md:text-2xl font-medium text-white">360°</p>
            <p className="text-sm text-white/70 font-light">Detection Angle</p>
          </div>
          <div className="p-4">
            <p className="text-xl md:text-2xl font-medium text-white">AWD</p>
            <p className="text-sm text-white/70 font-light">Compatibility</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md w-full sm:w-auto py-6"
            onClick={() => scrollToSection("waitlist")}
          >
            Order Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10 rounded-md w-full sm:w-auto py-6"
            onClick={() => scrollToSection("specs")}
          >
            Experience QuickShift Pro
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
