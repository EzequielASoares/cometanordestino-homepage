"use client";

import { motion } from "framer-motion";
import { useScrollReveal, staggerContainer, staggerItem } from "../hooks/useScrollReveal";
import { experiments } from "../lib/data";

export const Experiments = () => {
  const reveal = useScrollReveal();

  return (
    <section className="py-24 md:py-32 w-full bg-surface relative" id="experimentos">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...reveal} className="mb-16 md:mb-20 md:w-2/3">
          <h2 className="font-space-grotesk font-bold text-brand-blue mb-6" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Quando o cosmos entra pela porta da escola
          </h2>
          <p className="font-inter text-text-secondary text-lg leading-relaxed">
            Nossas oficinas transformam conceitos abstratos em experiências palpáveis.
            É assim que a astronomia deixa de ser um mistério intocável.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {experiments.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="group rounded-xl bg-white border border-border-light overflow-hidden hover:shadow-lg hover:shadow-brand-blue/5 hover:border-brand-blue/20 transition-all duration-300 flex flex-col"
              >
                {/* Visual Placeholder */}
                <div className={`h-44 w-full bg-gradient-to-br ${exp.gradient} relative flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity`}>
                  <Icon className="text-white relative z-10 w-14 h-14 drop-shadow-md" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-space-grotesk font-bold text-text-primary text-lg mb-2">
                    {exp.title}
                  </h3>
                  <p className="font-inter text-text-secondary leading-relaxed text-sm flex-1">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
