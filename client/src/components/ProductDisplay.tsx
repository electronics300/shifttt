import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ProductDisplay() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    if (element) {
      const offset = 80; // Offset for the header
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-screen bg-white relative overflow-hidden py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div 
            className="order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-medium text-black mb-4">Safety First</h2>
            <p className="text-lg text-black/80 mb-6">
              Experience unparalleled safety with QuickShift Pro. Our advanced system features real-time monitoring and precision sensors that ensure optimal performance while maintaining the highest safety standards.
            </p>
            
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-medium text-black mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-black/80">
                  • Real-time shift pattern detection
                </li>
                <li className="flex items-center text-black/80">
                  • Advanced safety monitoring
                </li>
                <li className="flex items-center text-black/80">
                  • Precision gear optimization
                </li>
              </ul>
            </div>
            
            <Button
              variant="default"
              size="lg"
              className="w-full md:w-auto"
              onClick={scrollToWaitlist}
            >
              Order Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          
          {/* Right side - Image */}
          <motion.div 
            className="order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-medium text-black mb-4">Safety</h2>
            <p className="text-lg text-black/80 mb-6">
              Designed for maximum performance with uncompromised safety. The QuickShift Pro features advanced sensors that detect your shift pattern and optimize each gear change in real-time.
            </p>
            
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-medium text-black mb-2">5-Star Safety Rating</h3>
              <p className="text-black/70">
                The QuickShift Pro has earned the highest safety rating in every category from independent testing agencies worldwide.
              </p>
            </div>
            
            <div className="flex space-x-8 mb-8">
              <div>
                <h4 className="text-lg font-medium text-black">360°</h4>
                <p className="text-sm text-black/70">Sensor Coverage</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black">15ms</h4>
                <p className="text-sm text-black/70">Response Time</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-black">0</h4>
                <p className="text-sm text-black/70">False Triggers</p>
              </div>
            </div>
            
            <Button 
              variant="outline"
              className="text-black border-black/30 hover:bg-black/5 font-medium flex items-center"
              onClick={() => window.open('#', '_blank')}
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
