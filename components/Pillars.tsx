"use client";

import { motion } from "framer-motion";
import { useScrollReveal, staggerContainer, staggerItem } from "../hooks/useScrollReveal";
import { pillars } from "../lib/data";

export const Pillars = () => {
  const reveal = useScrollReveal();

  return (
    <section className="py-24 md:py-32 w-full bg-surface relative" id="pilares">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...reveal} className="text-center mb-16 md:mb-20">
          <h2 className="font-space-grotesk font-bold text-brand-blue" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Três razões para levar o cosmos até o sertão
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group p-8 rounded-xl bg-white border border-border-light hover:border-brand-blue/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-blue-pale flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  <Icon className="text-brand-blue group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <h3 className="font-space-grotesk font-bold text-text-primary text-xl mb-4">
                  {pillar.title}
                </h3>
                <p className="font-inter text-text-secondary leading-[1.7]">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
