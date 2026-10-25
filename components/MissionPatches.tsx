"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export const MissionPatches = () => {
  // We have 14 mission patches
  const patches = Array.from({ length: 14 }, (_, i) => i + 1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-32 w-full bg-white relative overflow-hidden">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-16">
        
        {/* Top Section: Text and Image */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left md:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-space-grotesk font-bold text-brand-blue" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              Nossas logos de missões
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-inter text-text-secondary text-lg mt-4 max-w-xl mx-auto md:mx-0"
            >
              A cada nova cidade, uma nova insígnia marca a nossa jornada pelo sertão.
            </motion.p>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <motion.img 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              src="/images/coordenador-missoes.png" 
              alt="Coordenador" 
              className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] object-contain drop-shadow-xl pointer-events-none"
            />
          </div>
        </div>

        {/* Bottom Section: Carousel */}
        <div className="relative group w-full mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll("left")}
            className="absolute -left-2 md:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-white rounded-full shadow-[0_0_15px_rgba(0,0,0,0.1)] text-brand-blue hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 disabled:opacity-0"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} className="md:w-8 md:h-8" />
          </button>
          
          <button 
            onClick={() => scroll("right")}
            className="absolute -right-2 md:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-white rounded-full shadow-[0_0_15px_rgba(0,0,0,0.1)] text-brand-blue hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 disabled:opacity-0"
            aria-label="Próximo"
          >
            <ChevronRight size={24} className="md:w-8 md:h-8" />
          </button>

          {/* Carousel container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 md:gap-8 px-4 py-8 snap-x snap-mandatory hide-scrollbar"
          >
            {patches.map((patchId, index) => (
              <motion.div
                key={patchId}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.05, rotate: 3 }}
                // Em telas grandes (lg), garantimos que fiquem 4 por tela subtraindo o gap (gap-8 = 2rem, 3 gaps = 6rem, dividido por 4 = 1.5rem)
                className="flex-none snap-center w-[calc(100%-1rem)] sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(25%-1.5rem)] aspect-square flex items-center justify-center bg-white rounded-full shadow-md border border-brand-blue/5 p-4 overflow-hidden hover:shadow-xl hover:shadow-brand-blue/20 transition-all cursor-pointer"
              >
                <img 
                  src={`/images/logos-missoes/${patchId}.png`} 
                  alt={`Missão ${patchId}`} 
                  className="w-full h-full object-contain pointer-events-none"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
