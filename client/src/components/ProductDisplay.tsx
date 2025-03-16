import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ProductDisplay() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    if (element) {
      const offset = 80; // Offset for the header
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  const specs = [
    { label: "RESPONSE TIME", value: "5ms" },
    { label: "WEIGHT", value: "72g" },
    { label: "POWER", value: "12V DC" },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-10 rounded-l-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              QUICKSHIFT<span className="text-primary">PRO</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Precision engineered for performance. The ultimate quickshifter for racers who demand excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {specs.map((spec, index) => (
                <div key={index} className="px-6 py-4 bg-zinc-900 rounded-lg">
                  <p className="text-sm text-gray-400">{spec.label}</p>
                  <p className="text-2xl font-bold">{spec.value}</p>
                </div>
              ))}
            </div>
            <Button 
              className="bg-primary text-white hover:bg-primary/90"
              onClick={scrollToWaitlist}
            >
              Join the Waitlist
            </Button>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 30, rotate: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ rotate: 0 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1588438378022-9a516a194d57?auto=format&q=80" 
              alt="QUICKSHIFT PRO Module" 
              className="max-w-full rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
