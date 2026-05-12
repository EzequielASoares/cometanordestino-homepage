"use client";

import { motion } from "framer-motion";
import { useScrollReveal, staggerContainer, staggerItem } from "../hooks/useScrollReveal";
import { team } from "../lib/data";

export const Team = () => {
  const reveal = useScrollReveal();

  return (
    <section className="py-24 md:py-32 w-full bg-surface-alt relative" id="equipe">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...reveal} className="text-center mb-16 md:mb-20">
          <h2 className="font-space-grotesk font-bold text-brand-blue" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Quem está por trás das estrelas
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="group rounded-xl bg-white border border-border-light p-8 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-blue/5 hover:border-brand-blue/20 transition-all duration-300"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-brand-blue to-brand-blue-light flex items-center justify-center mb-6 shadow-xl overflow-hidden border-4 border-white">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="font-space-grotesk font-bold text-white text-2xl tracking-widest">
                    {member.initials}
                  </span>
                )}
              </div>

              <div className="text-center">
                <h3 className="font-space-grotesk font-bold text-text-primary text-xl mb-1">
                  {member.name}
                </h3>
                <div className="font-space-mono text-brand-blue text-xs mb-2">
                  {member.title}
                </div>
                <div className="inline-block px-3 py-1 rounded-md bg-brand-blue-pale text-brand-blue text-xs font-medium mb-4">
                  {member.role}
                </div>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
