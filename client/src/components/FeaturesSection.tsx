import { motion } from "framer-motion";
import productImage from "../assets/images/product.png";

export function FeaturesSection() {
  return (
    <section id="features" className="relative min-h-screen bg-black overflow-hidden py-20">
      <div className="container mx-auto px-4 max-w-7xl h-full flex items-center">
        <motion.div
          className="w-full bg-stone-900/40 backdrop-blur-sm rounded-3xl border border-stone-700/50 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-4xl lg:text-5xl font-medium text-white">
                  Safety & Performance
                </h2>
                
                <p className="text-lg text-stone-300">
                  The QuickShift Pro maximizes control without distractions, featuring an unassuming design that integrates perfectly with any motorcycle electronics system.
                </p>

                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div className="space-y-2">
                    <p className="text-2xl font-medium text-white">15-inch</p>
                    <p className="text-sm text-stone-400">Touchscreen Display</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl font-medium text-white">Custom</p>
                    <p className="text-sm text-stone-400">Rider Profiles</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl font-medium text-white">OTA</p>
                    <p className="text-sm text-stone-400">Software Updates</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Image Side */}
            <div className="relative h-[400px] lg:h-[600px] order-first lg:order-last">
              <img
                src={productImage}
                alt="Motorcycle interior digital dashboard"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}