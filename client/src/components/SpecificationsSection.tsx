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
              The Intelligence of Sensor Fusion.
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">
              Maximum Acceleration. Absolute Control.
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
              The Raptor Quickshifter uses{" "}
              <span className="font-medium text-white">
                a non-contact Laser Sensor
              </span>{" "}
              to eliminate mechanical delays, ensuring the gear cut signal is
              delivered instantly. This provides the system with Ultra-Low
              Latency for every shift, guaranteeing maximum acceleration and
              flawless input capture from any lever position.
            </p>
            <p className="text-lg text-gray-400">
              Our integrated{" "}
              <span className="font-medium text-white">
                IMU (Inertial Measurement Unit)
              </span>{" "}
              monitors your motorcycle's real-time dynamics, including lean
              angle and pitch. This enables Context-Aware Safety, allowing the
              system to intelligently adjust or prevent the power cut during
              aggressive cornering to ensure stability and keep the chassis
              planted.
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
              <p className="text-4xl font-medium text-teal-500 mb-2">15 ms</p>
              <p className="text-base text-gray-400">
                Ultra-Low Latency Response Time
              </p>
            </div>
            <div>
              <p className="text-4xl font-medium text-teal-500 mb-2">6-Axis</p>
              <p className="text-base text-gray-400">
                IMU for Dynamic Real-time Control
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
