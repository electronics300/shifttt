import { motion } from "framer-motion";
import { Zap, Gauge, Battery, Cpu, Check, XCircle, Clock } from "lucide-react";

export function SpecificationsSection() {
  const specs = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Response Time",
      value: "5ms",
      description: "Lightning-fast activation for seamless shifting."
    },
    {
      icon: <Gauge className="h-5 w-5" />,
      title: "Weight",
      value: "72g",
      description: "Ultra-lightweight design with minimal impact."
    },
    {
      icon: <Battery className="h-5 w-5" />,
      title: "Power Requirements",
      value: "12V DC",
      description: "Standard power compatible with all modern motorcycles."
    },
    {
      icon: <Cpu className="h-5 w-5" />,
      title: "Processor",
      value: "Dual-Core",
      description: "Advanced processing for real-time calculations."
    }
  ];

  return (
    <section id="specs" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Features heading */}
          <div className="lg:w-1/4 mb-8 lg:mb-0">
            <h3 className="text-sm uppercase tracking-wider text-white/70 mb-4">Features</h3>
          </div>
          
          {/* Right side - Ball Technology */}
          <div className="lg:w-3/4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">QuickShift™ technology</h2>
              <p className="text-lg text-white/70 max-w-2xl">
                Turns on the spot and follows you effortlessly around the track, without the awkward moves.
              </p>
            </div>
            
            <div className="flex">
              <div className="w-2/3">
                {/* Technical illustration with animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-transparent relative h-96"
                >
                  <div className="absolute w-full h-full">
                    {/* SVG animation representing shift technology */}
                    <svg viewBox="0 0 500 500" className="w-full h-full">
                      <motion.g 
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      >
                        {Array.from({ length: 36 }).map((_, i) => (
                          <line 
                            key={i} 
                            x1="250" 
                            y1="250" 
                            x2={250 + 200 * Math.cos(i * 10 * Math.PI / 180)} 
                            y2={250 + 200 * Math.sin(i * 10 * Math.PI / 180)} 
                            stroke="white" 
                            strokeWidth={i % 2 === 0 ? "2" : "1"} 
                            strokeOpacity={i % 2 === 0 ? "0.8" : "0.4"}
                          />
                        ))}
                      </motion.g>
                    </svg>
                  </div>
                </motion.div>
              </div>
              
              <div className="w-1/3">
                {/* Navigation dots */}
                <div className="flex justify-center space-x-2 mt-8">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  <div className="w-2 h-2 rounded-full bg-white/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
