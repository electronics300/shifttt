import { motion } from "framer-motion";
import { Zap, Gauge, Battery, Cpu, Check, XCircle, Clock } from "lucide-react";

export function SpecificationsSection() {
  const mainSpecs = [
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

  const dimensions = [
    { label: "Length", value: "68mm" },
    { label: "Width", value: "42mm" },
    { label: "Height", value: "18mm" },
    { label: "Sensor Cable Length", value: "450mm" },
  ];

  const compatibility = [
    { label: "Japanese Sportbikes", value: "Full Support", status: "success" },
    { label: "European Sportbikes", value: "Full Support", status: "success" },
    { label: "American Motorcycles", value: "Limited Support", status: "warning" },
    { label: "Electric Motorcycles", value: "Coming Soon", status: "error" },
  ];

  return (
    <section id="specs" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Specifications</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every component engineered to deliver uncompromising performance.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mainSpecs.map((spec, index) => (
            <motion.div 
              key={index} 
              className="bg-black p-6 rounded-lg cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center mr-4">
                  {spec.icon}
                </div>
                <h3 className="text-lg font-semibold">{spec.title}</h3>
              </div>
              <p className="text-3xl font-bold">{spec.value}</p>
              <p className="text-gray-400 mt-2">{spec.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-black p-8 rounded-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Dimensions</h3>
            <div className="space-y-4 text-lg">
              {dimensions.map((item, index) => (
                <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span>{item.label}</span>
                  <span className="font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-black p-8 rounded-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Compatibility</h3>
            <div className="space-y-4 text-lg">
              {compatibility.map((item, index) => (
                <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span>{item.label}</span>
                  <span className={`font-semibold ${
                    item.status === "success" ? "text-green-400" : 
                    item.status === "warning" ? "text-yellow-400" : 
                    "text-red-400"
                  }`}>{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
