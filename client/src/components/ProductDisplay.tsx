import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import productImage from "../assets/images/product.png";

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
    <section className="min-h-screen bg-zinc-900 relative overflow-hidden flex items-center">
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature Overview */}
          <motion.div
            className="col-span-1 md:col-span-2 bg-stone-800/40 backdrop-blur-sm p-8 rounded-3xl border border-stone-700/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-medium text-white mb-4">
              Lumashift
            </h2>
            <p className="text-lg text-stone-300 mb-6">
              Experience unparalleled performance with QuickShift Pro. Our
              advanced system features real-time monitoring and precision
              sensors that ensure optimal gear changes with intelligent
              adaptation.
            </p>
          </motion.div>

          {/* Product Image */}
          <motion.div
            className="h-[300px] md:h-auto md:row-span-2 bg-stone-800/40 backdrop-blur-sm rounded-3xl overflow-hidden relative border border-stone-700/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={productImage}
              alt="QuickShift Pro Device"
              className="w-full h-full object-cover opacity-90"
            />
          </motion.div>

          {/* Key Features */}
          <motion.div
            className="bg-stone-800/40 backdrop-blur-sm p-8 rounded-3xl border border-stone-700/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-medium text-white mb-4">
              Key Features
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-stone-300">
                • Adaptive gear pattern detection
              </li>
              <li className="flex items-center text-stone-300">
                • Real-time performance monitoring
              </li>
              <li className="flex items-center text-stone-300">
                • Dynamic gear optimization
              </li>
            </ul>
          </motion.div>

          {/* Safety Rating */}
          <motion.div
            className="bg-stone-800/40 backdrop-blur-sm p-8 rounded-3xl border border-stone-700/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-medium text-white mb-2">
              5-Star Safety Rating
            </h3>
            <p className="text-stone-300">
              The QuickShift Pro has earned the highest safety rating in every
              category from independent testing agencies worldwide.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
