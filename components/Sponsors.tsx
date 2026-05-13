"use client";

import { motion } from "framer-motion";

export const Sponsors = () => {
  return (
    <section className="pt-16 md:pt-24 pb-0 bg-white border-t border-border-light relative z-20" id="apoio">
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

        {/* Foto da Equipe */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-12 md:mt-16 w-full mx-auto"
        >
          <img 
            src="/images/fotofinal.png" 
            alt="Equipe Cometa Nordestino" 
            className="w-full h-auto object-contain [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" 
          />
        </motion.div>
      </div>
    </section>
  );
};
