import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function SpecificationsSection() {
  return (
    <section id="specs" className="relative h-screen bg-white overflow-hidden flex flex-col">
      {/* Main content */}
      <div className="container mx-auto flex-1 flex flex-col md:flex-row items-center justify-center px-4 z-10 py-16">
        {/* Left Column - Text/Content */}
        <motion.div 
          className="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-medium mb-6 text-black">Performance</h2>
          <p className="text-lg text-black/70 mb-8">
            Engineered for maximum response time and precision, the QuickShift Pro delivers seamless performance in any riding condition, from daily commutes to race track environments.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-medium text-black mb-2">15ms</h3>
              <p className="text-black/70">Response time from rider input to gear activation</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-black mb-2">99.9%</h3>
              <p className="text-black/70">Precision rate in detection accuracy</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-black mb-2">5 Years</h3>
              <p className="text-black/70">Comprehensive warranty coverage</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-black mb-2">250+</h3>
              <p className="text-black/70">Compatible motorcycle models</p>
            </div>
          </div>
          
          <Button 
            variant="outline"
            className="border-black/20 text-black hover:bg-black/5 font-medium flex items-center"
          >
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
        
        {/* Right Column - Image */}
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&q=80" 
              alt="QuickShift Pro performance data" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Bottom specs */}
      <div className="bg-black/90 py-8 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-2xl font-medium text-white">3.1 sec</p>
              <p className="text-sm text-white/60">0-60 mph</p>
            </div>
            <div>
              <p className="text-2xl font-medium text-white">150 mph</p>
              <p className="text-sm text-white/60">Top Speed</p>
            </div>
            <div>
              <p className="text-2xl font-medium text-white">28g</p>
              <p className="text-sm text-white/60">Module Weight</p>
            </div>
            <div>
              <p className="text-2xl font-medium text-white">-12%</p>
              <p className="text-sm text-white/60">Lap Time Reduction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}