"use client";

import { motion } from "framer-motion";

const oficinas = [
  { title: "Montagem de foguetes", image: "https://i.imgur.com/jsACFuk.png" },
  { title: "CosmoCine", image: "https://i.imgur.com/yq3YypE.png" },
  { title: "Expansão do universo", image: "https://i.imgur.com/jlA2uvU.png" },
  { title: "Montagem do espectrógrafo", image: "https://i.imgur.com/OtYwGT8.png" },
  { title: "Montagem de lunetas", image: "https://i.imgur.com/ZpjOTrs.png" },
  { title: "Planetário", image: "https://i.imgur.com/0IKJEv1.png" },
];

export const Workshops = () => {
  return (
    <section className="py-24 md:py-32 w-full bg-surface-alt relative overflow-hidden" id="oficinas">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="font-space-grotesk font-bold text-brand-blue" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Oficinas
          </h2>
          <p className="font-inter text-text-secondary mt-4 max-w-2xl">
            Atividades práticas desenvolvidas para transformar a curiosidade em conhecimento real.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {oficinas.map((oficina, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-border-light"
            >
              <img 
                src={oficina.image} 
                alt={oficina.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-space-grotesk font-bold text-white text-2xl md:text-3xl leading-tight">
                  {oficina.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
