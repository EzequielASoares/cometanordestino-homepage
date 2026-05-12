"use client";

import { motion } from "framer-motion";

const novosExperimentos = [
  { title: "Polarização da luz", desc: "Investigando a natureza da luz através de suas propriedades polarizadas no estudo astronômico", image: "https://i.imgur.com/ZYfQtsR.png" },
  { title: "Formação da imagem", desc: "Analisando os processos ópticos para compreender a formação das imagens no contexto celeste", image: "https://i.imgur.com/kCcYIlF.png" },
  { title: "Trânsito planetário", desc: "Estudando os alinhamentos planetários para explorar suas implicações no sistema solar", image: "https://i.imgur.com/g8w93eB.png" },
  { title: "Eclipses na Astronomia", desc: "Examinando os fenômenos dos eclipses para compreender melhor os movimentos celestes", image: "https://i.imgur.com/rw86R6r.png" },
  { title: "Fases da lua", desc: "Analisando os padrões das fases lunares para compreender os ciclos lunares", image: "https://i.imgur.com/35cSvjo.png" },
  { title: "Espaço tempo", desc: "Explorando a conexão entre espaço e tempo na cosmologia e astronomia moderna", image: "https://i.imgur.com/fe5NfaQ.png" },
];

export const Missions = () => {
  return (
    <section className="py-24 md:py-32 w-full bg-surface relative overflow-hidden" id="experimentos">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="font-space-grotesk font-bold text-brand-blue" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Experimentos
          </h2>
          <p className="font-inter text-text-secondary mt-4 max-w-2xl">
            Nossas demonstrações práticas que conectam a física teórica com a realidade visual do nosso universo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {novosExperimentos.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-border-light"
            >
              <img 
                src={exp.image} 
                alt={exp.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-space-grotesk font-bold text-brand-accent text-2xl md:text-3xl leading-tight mb-2">
                  {exp.title}
                </h3>
                <p className="font-inter text-white/90 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
