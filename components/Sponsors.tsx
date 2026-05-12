"use client";

import { motion } from "framer-motion";

export const Sponsors = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-border-light relative z-20" id="apoio">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="font-space-grotesk font-bold text-brand-blue text-2xl md:text-3xl mb-3">
            Apoio & Realização
          </h3>
          <p className="text-text-muted font-inter text-sm md:text-base max-w-2xl mx-auto">
            Instituições que tornam possível a nossa jornada pelo sertão nordestino.
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-6 lg:gap-4 w-full opacity-90 px-4"
        >
          {["ufrn", "cnpq", "uefs", "ifba", "titan", "ectufrn"].map((sponsor) => (
            <img 
              key={sponsor}
              src={`/images/apoio-${sponsor}.png`} 
              alt={`Apoio ${sponsor.toUpperCase()}`} 
              className="h-12 md:h-14 lg:h-16 w-auto object-contain hover:scale-110 transition-transform duration-300 drop-shadow-sm max-w-[150px] lg:max-w-[180px]" 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
