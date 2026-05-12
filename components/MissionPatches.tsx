"use client";

import { motion } from "framer-motion";

export const MissionPatches = () => {
  // We have 14 mission patches
  const patches = Array.from({ length: 14 }, (_, i) => i + 1);

  return (
    <section className="py-20 md:py-32 w-full bg-white relative overflow-hidden">
      
      {/* Imagem do coordenador no fundo à direita */}
      <motion.img 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.5, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        src="/images/coordenador-missoes.png" 
        alt="Coordenador" 
        className="absolute -bottom-5 -right-10 md:right-0 md:bottom-0 w-[350px] md:w-[500px] lg:w-[650px] object-contain z-0 pointer-events-none drop-shadow-xl mix-blend-multiply"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
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
            className="font-inter text-text-secondary text-lg mt-4 max-w-2xl mx-auto"
          >
            A cada nova cidade, uma nova insígnia marca a nossa jornada pelo sertão.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {patches.map((patchId, index) => (
            <motion.div
              key={patchId}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ scale: 1.05, rotate: 3 }}
              className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 flex items-center justify-center bg-white rounded-full shadow-md border border-brand-blue/5 p-4 overflow-hidden hover:shadow-xl hover:shadow-brand-blue/20 transition-all cursor-pointer"
            >
              <img 
                src={`/images/logos-missoes/${patchId}.png`} 
                alt={`Missão ${patchId}`} 
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
