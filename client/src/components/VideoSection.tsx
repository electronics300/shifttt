import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoId = "u8ROvcT9Oxs"; // Replace with your YouTube video ID

  return (
    <section className="relative py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">See It In Action</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the difference QUICKSHIFT PRO makes on the track.
          </p>
        </motion.div>
        
        <motion.div 
          className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full h-0 pt-[56.25%] relative bg-zinc-900 rounded-lg flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1615412704911-55ca9cffdeff?auto=format&q=80" 
                alt="Racing motorcycle on track" 
                className="w-full h-full object-cover opacity-50"
              />
              
              <motion.button 
                className="absolute transform transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsVideoOpen(true)}
              >
                <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center hover:bg-white/90 transition-colors">
                  <Play className="h-10 w-10 fill-current" />
                </div>
                <span className="sr-only">Play Video</span>
              </motion.button>
              
              <div className="absolute bottom-4 left-4 text-lg text-white">
                <span className="font-semibold">QUICKSHIFT PRO: Track Demo</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[900px] p-0 bg-black border-zinc-800">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
