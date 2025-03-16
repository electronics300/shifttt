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
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 flex-1 flex flex-col justify-center z-10">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            QuickShift Pro
          </motion.h1>

          <motion.p 
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The next generation quick shifter for performance motorcycles
          </motion.p>

          <motion.div 
            className="grid grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <p className="text-2xl md:text-3xl font-medium text-white">
                15 ms
              </p>
              <p className="text-sm text-white/70">Response Time</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-medium text-white">
                360°
              </p>
              <p className="text-sm text-white/70">Detection Angle</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-medium text-white">AWD</p>
              <p className="text-sm text-white/70">Compatibility</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Order Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("features")}
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}