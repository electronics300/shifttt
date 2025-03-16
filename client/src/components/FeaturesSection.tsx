import { motion } from "framer-motion";
import { Zap, Sliders, Settings, Shield } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Lightning-Fast Response",
      description: "Ultra-responsive 5ms activation time ensures instantaneous gear shifts with no perceptible delay."
    },
    {
      icon: <Sliders className="h-5 w-5" />,
      title: "Intelligent Adaptation",
      description: "AI-powered self-learning system adjusts to your riding style and bike characteristics for optimized performance."
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Universal Compatibility",
      description: "Works with virtually all modern sportbikes thanks to our patented adaptive sensing technology."
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Race-Proven Reliability",
      description: "Developed and tested with professional riders on top-tier racing circuits worldwide."
    }
  ];

  return (
    <section id="features" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Engineered for Excellence</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            QUICKSHIFT PRO redefines motorcycle performance with cutting-edge technology and precision engineering.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&q=80" 
              alt="Motorcycle engine close-up" 
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-full p-2 mt-1 text-black">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
