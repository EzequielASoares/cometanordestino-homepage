"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { BookOpen, Download } from "lucide-react";

export const EbookCTA = () => {
  const reveal = useScrollReveal();

  return (
    <section className="py-24 md:py-32 w-full bg-brand-blue-pale border-y border-brand-blue/10 relative overflow-hidden" id="ebook">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div {...reveal} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Ebook Cover Image */}
          <div className="flex justify-center md:justify-end order-2 md:order-1">
            <div className="relative">
              {/* Shadow/glow behind cover */}
              <div className="absolute -inset-4 bg-brand-blue/10 rounded-2xl blur-2xl" />
              <img
                src="/images/ebook-cover.png"
                alt="Ebook Cometa Nordestino — Guia Prático de Astronomia para Escolas"
                className="relative w-[320px] md:w-[400px] lg:w-[450px] rounded-xl shadow-2xl shadow-brand-blue/20 border border-brand-blue/10 transform hover:scale-[1.02] transition-transform duration-300 mx-auto"
              />
            </div>
          </div>

          {/* CTA Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2">
            <div className="mb-6 px-4 py-1.5 rounded-full bg-white border border-brand-blue/10 flex items-center gap-2 shadow-sm">
              <BookOpen size={14} className="text-brand-blue" />
              <span className="font-space-mono text-xs text-brand-blue uppercase tracking-widest font-medium">
                Material Gratuito
              </span>
            </div>

            <h2 className="font-space-grotesk font-bold text-brand-blue mb-6" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1.15 }}>
              Leve o universo para a sua sala de aula
            </h2>

            <p className="font-inter text-text-secondary text-lg mb-8 leading-relaxed max-w-md">
              Baixe nosso manual prático com 10 experimentos de astronomia usando materiais recicláveis e de baixo custo.
            </p>

            <ul className="flex flex-col gap-3 mb-10 text-left">
              {["10 experimentos práticos", "Materiais de baixo custo", "Roteiro para professores", "100% gratuito"].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 font-inter text-sm text-text-secondary">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-blue text-xs font-bold">✓</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <button className="group px-8 py-4 rounded-lg bg-brand-blue text-white font-bold text-lg shadow-lg shadow-brand-blue/20 hover:bg-brand-blue-light hover:shadow-xl transition-all duration-300 flex items-center gap-3">
              <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
              Baixar Ebook Agora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
