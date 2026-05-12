"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden">
        
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover"
          style={{ backgroundImage: "url('/images/capa-site.png')", backgroundPosition: "center 30%" }}
        />
        <div className="absolute inset-0 z-0 bg-brand-blue/50 mix-blend-multiply" />
        <div className="absolute inset-0 z-0 bg-black/20" />

        {/* Comet Animation (subtle over the background) */}
        <div className="absolute top-20 left-0 w-[3px] h-[3px] rounded-full bg-brand-accent animate-comet z-0 opacity-60">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[120px] h-[1.5px] bg-gradient-to-l from-brand-accent/80 via-white/30 to-transparent blur-[0.5px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center pt-16 md:pt-24 pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="-mb-10 md:-mb-14 z-10"
          >
            <img src="/images/logo.png" alt="Cometa Nordestino" className="w-40 h-40 md:w-56 md:h-56 object-contain mx-auto drop-shadow-2xl relative z-10" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-space-grotesk font-extrabold tracking-[-0.02em] leading-[1.05] text-white drop-shadow-xl relative z-20"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Cometa Nordestino
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <ArrowDown className="text-white/60 animate-bounce" size={24} />
        </motion.div>
      </section>

    </>
  );
};
