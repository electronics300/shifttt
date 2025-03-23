import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Clock, Wrench, Flame, ChevronRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="pt-1 pb-14 bg-black relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main About Box */}
          <motion.div
            className="lg:col-span-3 bg-zinc-900/40 backdrop-blur-sm rounded-3xl border border-zinc-800 p-8 lg:p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
                  About QUICKSHIFT PRO
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  Born from raw power and engineered for dominance, QUICKSHIFT PRO unleashes the beast within your motorcycle.
                </p>
                <div className="flex items-center text-white group cursor-pointer">
                  Learn about our technology
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700">
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-400 text-lg">
                  Our cutting-edge shifting technology represents the apex of performance, designed for riders who demand absolute control and uncompromising excellence.
                </p>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10">
              <Flame className="h-96 w-96 text-white" />
            </div>
          </motion.div>

          {/* Main Feature Box */}
          <motion.div
            className="lg:col-span-2 bg-zinc-900/40 backdrop-blur-sm rounded-3xl border border-zinc-800 p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Revolutionary Shifting Technology
              </h3>
              <p className="text-lg text-gray-400 mb-6">
                Experience the future of motorcycle control with our advanced quickshifter system. 
                Featuring adaptive learning algorithms and precision sensors that work in harmony 
                with your bike's ECU for lightning-fast, smooth gear changes.
              </p>
              <div className="flex items-center text-white hover:text-gray-300 transition-colors">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </div>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10">
              <Zap className="h-48 w-48 text-white" />
            </div>
          </motion.div>

          {/* Stats Box */}
          <motion.div
            className="bg-zinc-900/40 backdrop-blur-sm rounded-3xl border border-zinc-800 p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Clock className="h-8 w-8 text-white mb-4" />
            <h4 className="text-2xl font-bold text-white mb-2">15ms Response Time</h4>
            <p className="text-gray-400">
              Industry-leading reaction speed for instantaneous gear changes when you need them most.
            </p>
          </motion.div>

          {/* Compatibility Box */}
          <motion.div
            className="bg-zinc-900/40 backdrop-blur-sm rounded-3xl border border-zinc-800 p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Wrench className="h-8 w-8 text-white mb-4" />
            <h4 className="text-2xl font-bold text-white mb-2">Universal Fit</h4>
            <p className="text-gray-400">
              Compatible with over 250+ motorcycle models across all major manufacturers.
            </p>
          </motion.div>

          {/* Safety Box */}
          <motion.div
            className="lg:col-span-2 bg-zinc-900/40 backdrop-blur-sm rounded-3xl border border-zinc-800 p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-start space-x-6">
              <Shield className="h-12 w-12 text-white flex-shrink-0" />
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Safety & Reliability
                </h4>
                <p className="text-gray-400">
                  Built with redundant safety systems and rigorous testing protocols. 
                  Our quickshifter features fail-safe mechanisms and automatic system 
                  health monitoring. Backed by a comprehensive 5-year warranty and 24/7 
                  technical support.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}