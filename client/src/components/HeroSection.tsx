import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import mainBackground from "../assets/images/mainbg.jpg";

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
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={mainBackground}
          alt="Performance motorcycle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 pb-12 z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Raptor
          </motion.h1>

          <motion.p 
            className="text-lg text-white/90 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The next generation quickshifter for performance motorcycles
          </motion.p>

          <motion.div 
            className="grid grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <p className="text-xl font-medium text-white">
                15 ms
              </p>
              <p className="text-xs text-white/70">Response Time</p>
            </div>
            <div>
              <p className="text-xl font-medium text-white">
                360°
              </p>
              <p className="text-xs text-white/70">Detection Angle</p>
            </div>
            <div>
              <p className="text-xl font-medium text-white">LASER</p>
              <p className="text-xs text-white/70">Sensor</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              size="default"
              className="bg-black text-white hover:bg-white/10"
              onClick={() => scrollToSection("waitlist")}
            >
              Join Wishlist
            </Button>
            <Button
              variant="outline"
              size="default"
              className="border-white text-white bg-transparent hover:bg-white/70"
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
