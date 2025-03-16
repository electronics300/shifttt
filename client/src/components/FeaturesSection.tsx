import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react"; 

export function FeaturesSection() {
  return (
    <section id="features" className="relative h-screen bg-black overflow-hidden flex flex-col">
      {/* Full screen background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1558383817-abb21a24278a?auto=format&q=80" 
          alt="Motorcycle interior digital dashboard"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto flex-1 flex flex-col justify-center px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-medium mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Safety & Performance
          </motion.h2>
          
          <motion.p 
            className="text-lg text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The QuickShift Pro maximizes control without distractions, featuring an unassuming design that integrates perfectly with any motorcycle electronics system.
          </motion.p>
          
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-4">
                <p className="text-lg md:text-xl font-medium text-white">15-inch</p>
                <p className="text-sm text-white/70">Touchscreen Display</p>
              </div>
              <div className="p-4">
                <p className="text-lg md:text-xl font-medium text-white">Custom</p>
                <p className="text-sm text-white/70">Rider Profiles</p>
              </div>
              <div className="p-4">
                <p className="text-lg md:text-xl font-medium text-white">OTA</p>
                <p className="text-sm text-white/70">Software Updates</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 1,
            repeatType: "reverse",
            repeat: Infinity,
          }}
          className="text-white flex flex-col items-center"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </div>
    </section>
  );
}