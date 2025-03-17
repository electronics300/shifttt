
import { motion } from "framer-motion";

export function CompatibilitySection() {
  const brands = [
    { name: "Honda", models: ["CBR1000RR", "CBR600RR", "CB1000R"] },
    { name: "Yamaha", models: ["YZF-R1", "YZF-R6", "MT-10"] },
    { name: "Kawasaki", models: ["ZX-10R", "ZX-6R", "Z900"] },
    { name: "Suzuki", models: ["GSX-R1000", "GSX-R750", "GSX-S1000"] },
    { name: "Ducati", models: ["Panigale V4", "Monster", "Streetfighter V4"] },
    { name: "BMW", models: ["S1000RR", "M1000RR", "S1000R"] },
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Compatible Motorcycles</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            QUICKSHIFT PRO supports a wide range of modern sportbikes from leading manufacturers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              className="bg-black/50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{brand.name}</h3>
              <ul className="space-y-2">
                {brand.models.map((model) => (
                  <li key={model} className="text-gray-400">{model}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400">
            Compatible with most sportbikes manufactured from 2008 onwards. Contact support for specific model compatibility.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
