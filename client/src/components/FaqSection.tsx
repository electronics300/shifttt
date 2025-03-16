import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export function FaqSection() {
  const faqs = [
    {
      question: "What motorcycles is QUICKSHIFT PRO compatible with?",
      answer: "QUICKSHIFT PRO is designed to work with most modern sportbikes from major manufacturers including Honda, Yamaha, Kawasaki, Suzuki, Ducati, BMW, and Aprilia. It's compatible with bikes manufactured from 2008 onward with electronic fuel injection. For specific model compatibility, please contact our support team."
    },
    {
      question: "Will installing QUICKSHIFT PRO void my motorcycle warranty?",
      answer: "In most cases, installing QUICKSHIFT PRO will not void your motorcycle's warranty as it's designed to be non-invasive and easily removable without any permanent modifications. However, warranty policies vary by manufacturer, so we recommend checking with your dealer for specific details."
    },
    {
      question: "How difficult is installation?",
      answer: "Installation is designed to be straightforward and typically takes 30-45 minutes for someone with basic mechanical knowledge. We provide comprehensive step-by-step instructions and video tutorials. If you're not comfortable with motorcycle electronics, we recommend professional installation through one of our certified partners."
    },
    {
      question: "Does QUICKSHIFT PRO work for downshifts too?",
      answer: "Yes, QUICKSHIFT PRO supports both upshifts and downshifts (auto-blip functionality) on compatible motorcycles. The bi-directional shifting capability allows for seamless gear changes in both directions without using the clutch, significantly enhancing the riding experience on track and street."
    },
    {
      question: "What is the warranty period?",
      answer: "QUICKSHIFT PRO comes with a 2-year limited warranty covering manufacturing defects. We also offer an extended warranty option that provides coverage for up to 5 years. For complete warranty details, please refer to the warranty information included with your purchase."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about the QUICKSHIFT PRO.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionItem value={`faq-${index}`} className="mb-4 border-0">
                  <AccordionTrigger className="bg-black/80 backdrop-blur-sm border border-black/20 rounded-lg p-6 text-left hover:bg-black/90 hover:no-underline shadow-lg">
                    <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="bg-black/60 backdrop-blur-md border-x border-b border-black/20 mt-1 p-6 rounded-b-lg shadow-lg">
                    <p className="text-gray-200">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
