import { motion } from "framer-motion";
import { ChevronDown, Facebook, Instagram, Twitter } from "lucide-react";
import mainBackground from "../assets/images/mainbg.jpg";

export function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Blurred Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={mainBackground}
          alt="Background abstract"
          className="w-full h-full object-cover brightness-150"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Coming Soon Content */}
      <div className="z-10 flex flex-col items-center text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Coming soon!
        </motion.h1>

        <motion.div
          className="mt-8 w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold text-white mb-2">
            Join our waitlist!
          </h2>
          <p className="text-sm text-white/80 mb-4">
            Sign up for updates and early access — straight to your inbox.
          </p>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none"
            />
            <button className="px-4 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition">
              Join Waitlist
            </button>
          </div>
        </motion.div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-6 opacity-70">
          <a href="#"><Twitter className="w-5 h-5" /></a>
          <a href="#"><Facebook className="w-5 h-5" /></a>
          <a href="#"><Instagram className="w-5 h-5" /></a>
        </div>

        {/* Footer Text */}
        <div className="text-xs text-white/40 mt-4">
          ©2025 YourCompany · Built by You · <a href="#" className="underline">404</a>
        </div>
      </div>

      {/* Animated Down Arrow */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="text-white w-6 h-6 opacity-60" />
      </motion.div>
    </section>
  );
}
