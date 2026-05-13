"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Building, Rocket, Library, Atom, School } from "lucide-react";

const AnimatedCounter = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [value, count, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export const About = () => {
  const reveal = useScrollReveal();

  return (
    <section className="py-24 md:py-32 w-full bg-surface-alt relative overflow-hidden" id="sobre">
      
      {/* Imagem da coordenadora Selma no fundo à direita */}
      <motion.img 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.4, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        src="/images/coordenadora-selma.png" 
        alt="Coordenadora Selma" 
        className="absolute -bottom-5 -right-20 md:-right-10 lg:-right-[15%] w-[600px] md:w-[800px] lg:w-[1300px] lg:h-[1000px] object-contain object-right-bottom z-0 pointer-events-none mix-blend-multiply grayscale"
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6"
        >
          <h2 className="font-space-grotesk font-bold text-brand-blue leading-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            A ciência não pode ser privilégio de quem vive perto dos grandes centros
          </h2>

          <div className="flex flex-col gap-4 text-text-secondary font-inter text-base leading-[1.8]">
            <p>
              Nós acreditamos que um telescópio no pátio de uma escola pode mudar a trajetória de um estudante. O <strong className="text-brand-blue font-semibold">Cometa Nordestino</strong> nasceu da união entre universidades públicas para descentralizar o conhecimento científico no Brasil.
            </p>
            <p>
              Com pesquisadores da UFRN, IFBA e UEFS, cruzamos o Nordeste brasileiro levando oficinas práticas, observações astronômicas e, acima de tudo, a certeza de que a ciência também tem sotaque nordestino.
            </p>
          </div>

          <div className="flex items-center gap-3 mt-2">
            {["RN", "BA", "CE", "PE"].map((uf) => (
              <span key={uf} className="px-3 py-1.5 rounded-md bg-brand-blue-pale text-brand-blue font-space-mono text-sm font-bold border border-brand-blue/10">
                {uf}
              </span>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full">
            {[
              { value: 35, label: "CIDADES", icon: Building },
              { value: 45, label: "ESCOLAS", icon: School },
              { value: 7, label: "OFICINAS", icon: Rocket },
              { value: 6, label: "EXPERIMENTOS", icon: Atom },
              { value: 3, label: "INSTITUIÇÕES", icon: Library },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col items-start gap-1 p-4 rounded-xl bg-white border border-brand-blue/10 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 rounded-full bg-brand-blue-pale flex items-center justify-center">
                      <Icon className="text-brand-blue" size={16} strokeWidth={2} />
                    </div>
                    <span className="font-space-mono text-2xl text-brand-blue font-bold">
                      <AnimatedCounter value={stat.value} />
                    </span>
                  </div>
                  <span className="text-[10px] md:text-xs text-brand-blue/70 font-bold font-inter uppercase leading-tight">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>


      </div>
    </section>
  );
};
