import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import mainBackground from "../assets/images/mainbg.jpg";

export function SpecificationsSection() {
  return (
    <section
      id="specs"
      className="relative min-h-screen bg-black overflow-hidden flex items-center"
    >
      <div className="container mx-auto max-w-4xl px-4 pt-2 pb-14">
        {/* Main Heading */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-teal-500">
              Even longer battery life.
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">
              You'll need to recharge before it will.
            </h3>
          </motion.div>
        </div>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="aspect-[16/9]">
            <img
              src={mainBackground}
              alt="QuickShift Pro Device"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="space-y-12">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-400">
              QuickShift Pro has been designed to make room for a larger battery, which works together with our advanced processor to deliver 
              <span className="font-medium text-white"> a big boost in battery life</span>, even with so many new features. So you can ride, race, and explore on — and on.
            </p>

            <p className="text-lg text-gray-400">
              Snap on a new MagSafe charger for <span className="font-medium text-white">even faster wireless charging</span> — up to 25W with a 30W power adapter or higher, enabling up to 50% charge in around 30 minutes.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div>
              <p className="text-4xl font-medium text-teal-500 mb-2">27 hours</p>
              <p className="text-base text-gray-400">continuous operation on Pro model</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-teal-500 mb-2">22 hours</p>
              <p className="text-base text-gray-400">continuous operation on standard model</p>
            </div>
          </motion.div>

          
        </div>
      </div>
    </section>
  );
}
