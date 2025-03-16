import { motion } from "framer-motion";
import { Info } from "lucide-react";

export function InstallationSection() {
  const steps = [
    {
      number: 1,
      title: "Connect to ECU",
      description: "Plug the QUICKSHIFT PRO module directly into your motorcycle's ECU connector."
    },
    {
      number: 2,
      title: "Attach Sensor",
      description: "Mount the precision sensor to your shift linkage for accurate detection."
    },
    {
      number: 3,
      title: "Calibrate & Ride",
      description: "Run the simple calibration sequence and enjoy smoother, faster shifts immediately."
    }
  ];

  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple Installation</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Easy to install on virtually any sportbike with our comprehensive instruction guide.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-black p-8 rounded-lg max-w-3xl mx-auto">
            <div className="flex items-start">
              <div className="bg-primary p-2 rounded-full mr-4 mt-1">
                <Info className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Professional Installation Available</h4>
                <p className="text-gray-400">
                  While designed for easy DIY installation, we recommend professional installation for riders not comfortable with motorcycle electronics. Contact our support team for recommended installation partners in your area.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
