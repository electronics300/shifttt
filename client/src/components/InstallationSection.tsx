import { motion } from "framer-motion";
import { Info } from "lucide-react";

export function InstallationSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple Installation</h2>
          <p className="text-gray-400 text-lg">
            Easy to install on virtually any sportbike with our comprehensive instruction guide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
          {/* Step 1 */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Connect to ECU</h3>
            <p className="text-gray-400">
              Plug the QUICKSHIFT PRO module directly into your motorcycle's ECU connector.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Attach Sensor</h3>
            <p className="text-gray-400">
              Mount the precision sensor to your shift linkage for accurate detection.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Calibrate & Ride</h3>
            <p className="text-gray-400">
              Run the simple calibration sequence and enjoy smoother, faster shifts immediately.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="bg-zinc-900 rounded-lg p-8 max-w-3xl mx-auto border border-zinc-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-start gap-4">
            <div className="bg-white rounded-full p-2 mt-1">
              <Info className="w-5 h-5 text-black" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Professional Installation Available</h4>
              <p className="text-gray-400">
                While designed for easy DIY installation, we recommend professional installation for riders not 
                comfortable with motorcycle electronics. Contact our support team for recommended installation 
                partners in your area.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 