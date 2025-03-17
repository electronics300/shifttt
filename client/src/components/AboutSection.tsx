import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-24 bg-carnage-black relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-6 text-carnage-primary">About QUICKSHIFT PRO</h2>
          <p className="text-xl text-carnage-accent mb-8">
            Born from raw power and engineered for dominance, QUICKSHIFT PRO unleashes the beast within your motorcycle. Our cutting-edge shifting technology represents the apex of performance, designed for riders who demand absolute control and uncompromising excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}