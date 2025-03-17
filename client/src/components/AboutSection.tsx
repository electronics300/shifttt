
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">About QUICKSHIFT PRO</h2>
          <p className="text-xl text-gray-600 mb-8">
            Born from passion and engineered for perfection, QUICKSHIFT PRO represents the pinnacle of motorcycle performance technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Innovation First</h3>
            <p className="text-gray-600">
              Our team of engineers brings decades of racing experience to create cutting-edge shifting technology.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Precision Engineering</h3>
            <p className="text-gray-600">
              Every component is meticulously designed and tested to ensure flawless performance on every ride.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Customer Focus</h3>
            <p className="text-gray-600">
              We're committed to providing exceptional support and ensuring 100% satisfaction for every rider.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
