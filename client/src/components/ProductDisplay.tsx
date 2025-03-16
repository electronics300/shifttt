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
    { label: "WEIGHT", value: "17.3lbs" },
    { label: "POWER", value: "280AW" },
    { label: "CAPACITY", value: "0.53 gallons" },
    { label: "CORD LENGTH", value: "21ft" },
  ];

  return (
    <section className="min-h-screen bg-white relative overflow-hidden pt-32 pb-16">
      <div className="container mx-auto px-4 relative z-10">
        {/* Product Name and Tagline */}
        <div className="mb-16 max-w-xl">
          <h4 className="text-xs uppercase tracking-widest text-black mb-2 font-light">••••••</h4>
          <h2 className="text-lg text-black font-medium mb-1">
            Engineered for high precision shifting.
          </h2>
          <p className="text-black text-lg font-light">
            No other quickshifter responds faster.
          </p>
          
          <div className="mt-8 flex flex-col gap-2">
            <a href="#features" className="text-xs uppercase tracking-wider text-black/70 hover:text-black">Features</a>
            <a href="#specs" className="text-xs uppercase tracking-wider text-black/70 hover:text-black">Specifications</a>
            <a href="#faq" className="text-xs uppercase tracking-wider text-black/70 hover:text-black">In the box</a>
            <a href="#reviews" className="text-xs uppercase tracking-wider text-black/70 hover:text-black">Reviews</a>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left side content */}
          <div className="lg:w-1/2 relative mb-12 lg:mb-0 order-2 lg:order-1">
            {/* Price and Add to Cart */}
            <div className="flex mb-20">
              <div className="w-1/2 bg-black text-white p-6">
                <div className="text-sm mb-1 font-light">MODEL</div>
                <div className="text-xl mb-1">QuickShift Pro</div>
                <div className="text-lg">$359</div>
              </div>
              <div className="w-1/2 bg-amber-500 text-black p-6 flex items-center justify-center">
                <Button 
                  className="bg-transparent hover:bg-amber-600 text-black border-black border font-medium px-8"
                  onClick={scrollToWaitlist}
                >
                  ADD
                </Button>
              </div>
            </div>
            
            {/* Specifications */}
            <div className="space-y-8">
              {specs.map((spec, index) => (
                <div key={index} className="border-t border-gray-200 pt-4">
                  <div className="text-xs uppercase tracking-wider text-black/60 mb-1">{spec.label}</div>
                  <div className="text-xl text-black font-medium">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Image - Right side */}
          <motion.div 
            className="lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1588438378022-9a516a194d57?auto=format&q=80" 
              alt="QUICKSHIFT PRO Module" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
