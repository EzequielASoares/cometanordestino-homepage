"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";

const galleryPhotos = [
  { src: "/images/photo-planetario.jpg", caption: "Sessão de planetário com estudantes", height: "h-[280px]" },
  { src: "/images/gallery-0IKJEv1.png", caption: "Registro de atividades", height: "h-[220px]" },
  { src: "/images/gallery-H1VDjrL.jpg", caption: "Oficina prática", height: "h-[340px]" },
  { src: "/images/photo-impacto.jpg", caption: "Impacto social e educativo", height: "h-[260px]" },
  { src: "/images/gallery-AquoUXv.jpg", caption: "Observação noturna", height: "h-[300px]" },
  { src: "/images/gallery-35cSvjo.png", caption: "Atividade de campo", height: "h-[220px]" },
  { src: "/images/photo-inclusao.jpg", caption: "Inclusão na ciência", height: "h-[280px]" },
  { src: "/images/gallery-R3A4Xds.jpg", caption: "Observação astronômica", height: "h-[240px]" },
  { src: "/images/gallery-5cqAqve.png", caption: "Foguetes na prática", height: "h-[320px]" },
  { src: "/images/gallery-4eottpI.jpg", caption: "Ação na escola", height: "h-[220px]" },
  { src: "/images/gallery-ciRdpo1.jpg", caption: "Descobertas no sertão", height: "h-[280px]" },
  { src: "/images/gallery-wEpiqS9.jpg", caption: "Luneta artesanal", height: "h-[240px]" },
];

export const Gallery = () => {
  const reveal = useScrollReveal();

  return (
    <section className="py-24 md:py-32 w-full bg-surface relative" id="galeria">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...reveal} className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-brand-blue" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Um olhar sobre o impacto
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
        >
          {galleryPhotos.map((item, idx) => (
            <div
              key={idx}
              className={`group relative rounded-xl overflow-hidden break-inside-avoid ${item.height}`}
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-blue/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                <p className="font-space-grotesk font-bold text-white text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
