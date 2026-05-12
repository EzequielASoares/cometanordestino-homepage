"use client";

import { motion } from "framer-motion";
import { useScrollReveal, staggerContainer, staggerItem } from "../hooks/useScrollReveal";
import { citiesByState } from "../lib/data";

const stateColors: Record<string, string> = {
  RN: "#38BDF8", // Changed to Sky 400 so it's visible on dark blue background
  BA: "#005f9e",
  CE: "#D4A017",
  PE: "#2d8f6f",
};

export const Cities = () => {
  const reveal = useScrollReveal();

  const totalCities = citiesByState.reduce((acc, g) => acc + g.cities.length, 0);

  return (
    <section className="py-24 md:py-32 w-full bg-brand-blue relative overflow-hidden" id="cidades">
      {/* Imagem do coordenador Marildo no fundo à esquerda */}
      <motion.img 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.4, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        src="/images/coordenador-marildo.png" 
        alt="Coordenador Marildo" 
        className="absolute -bottom-5 -left-20 md:-left-32 lg:-left-[15%] md:-bottom-10 w-[600px] h-auto md:w-[900px] lg:w-[1400px] lg:h-[1000px] object-contain object-left-bottom z-0 pointer-events-none drop-shadow-2xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div {...reveal} className="text-center mb-6">
          <h2 className="font-space-grotesk font-bold text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Do litoral ao sertão
          </h2>
          <p className="font-space-mono text-white/70 text-sm md:text-base tracking-widest uppercase">
            {totalCities} cidades · 4 estados · 1 missão
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
          {/* ── Google My Maps Embed ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] rounded-xl overflow-hidden shadow-2xl border border-white/10"
          >
            <iframe 
              src="https://www.google.com/maps/d/u/0/embed?mid=18_Z1T-A334rSooZI3UfR0pPbtCEx7Ag&ehbc=2E312F&noprof=1" 
              className="w-full h-full border-0"
              title="Mapa de Cidades do Cometa Nordestino"
              loading="lazy"
            />
          </motion.div>

          {/* ── City chips by state ── */}
          <div className="relative flex flex-col gap-8 h-full min-h-[400px]">
            {/* Watermark SVG background */}
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none bg-no-repeat bg-center bg-contain" 
              style={{ backgroundImage: "url('/images/br.svg')" }}
            />
            
            <div className="relative z-10 flex flex-col gap-8">
              {citiesByState.map((stateGroup, idx) => (
                <div key={idx}>
                  <div className="mb-3 flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: stateColors[stateGroup.state] }} />
                    <span className="font-space-mono text-white/60 font-bold text-xs uppercase tracking-widest">
                      {stateGroup.state}
                    </span>
                    <span className="font-inter text-white/30 text-xs ml-2">
                      {stateGroup.cities.length} cidades
                    </span>
                  </div>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-wrap gap-2"
                  >
                    {stateGroup.cities.map((city, cityIdx) => (
                      <motion.div
                        key={cityIdx}
                        variants={staggerItem}
                        className="px-3 py-1.5 rounded-md border border-white/15 bg-white/5 hover:bg-white/15 hover:border-white/30 transition-colors duration-200 cursor-default"
                      >
                        <span className="font-inter text-white text-xs md:text-sm">
                          {city}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
