"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Download,
  Sparkles,
  Telescope,
  Orbit,
  Rocket,
  TestTube,
  GraduationCap,
  Users,
  Heart,
  Mail,
  Check,
} from "lucide-react";
import { useScrollReveal, staggerContainer, staggerItem } from "@/hooks/useScrollReveal";

export const EBOOK_URL =
  "https://drive.google.com/file/d/1tYouUgC6hrnvRg85SNCgcmTmZCNJSvxc/view";

const chapters = [
  {
    icon: Orbit,
    title: "Expansão do Universo",
    description: "Como o cosmos cresce e o que isso revela sobre o espaço e o tempo.",
  },
  {
    icon: Telescope,
    title: "Montagem de lunetas",
    description: "Óptica na prática com materiais simples e de baixo custo.",
  },
  {
    icon: TestTube,
    title: "Espectrógrafo",
    description: "A luz como ferramenta para descobrir do que as estrelas são feitas.",
  },
  {
    icon: Rocket,
    title: "Foguetes didáticos",
    description: "Física aplicada em lançamentos seguros com garrafas PET.",
  },
];

const audiences = [
  {
    icon: GraduationCap,
    title: "Professores",
    description: "Roteiros prontos para aplicar em sala de aula, com lista de materiais e passo a passo.",
  },
  {
    icon: Users,
    title: "Estudantes",
    description: "Atividades para feiras de ciência, trabalhos em grupo e projetos de extensão.",
  },
  {
    icon: Heart,
    title: "Entusiastas",
    description: "Para quem quer experimentar astronomia em casa com a família e os amigos.",
  },
];

const includes = [
  "Experimentos passo a passo",
  "Materiais de baixo custo e recicláveis",
  "Roteiro pensado para professores",
  "Conteúdo 100% gratuito",
];

export const EbookPageClient = () => {
  const reveal = useScrollReveal();

  return (
    <div className="w-full flex flex-col items-center">
      {/* ── MAIN EBOOK ── */}
      <section className="w-full bg-white py-16 md:py-24 border-b border-border-light">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...reveal} className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Cover */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-blue/10 rounded-2xl blur-2xl" />
                <img
                  src="/images/ebook-cover.png"
                  alt="Ebook Cometa Nordestino — Experimentos de Astronomia e Astronáutica"
                  className="relative w-[300px] md:w-[380px] lg:w-[430px] rounded-xl shadow-2xl shadow-brand-blue/20 border border-brand-blue/10 transform hover:scale-[1.02] transition-transform duration-300 mx-auto"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-6 px-4 py-1.5 rounded-full bg-brand-blue-pale border border-brand-blue/10 flex items-center gap-2">
                <BookOpen size={14} className="text-brand-blue" />
                <span className="font-space-mono text-xs text-brand-blue uppercase tracking-widest font-medium">
                  Material Gratuito
                </span>
              </div>

              <h2
                className="font-space-grotesk font-bold text-brand-blue mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1.15 }}
              >
                Experimentos de Astronomia e Astronáutica
              </h2>

              <p className="font-inter text-text-secondary text-base leading-relaxed mb-4 max-w-xl">
                Preparamos um eBook educacional gratuito reunindo os principais experimentos e
                oficinas que levamos às escolas. Neste material, explicamos passo a passo como
                realizar atividades didáticas que tornam o aprendizado mais envolvente e acessível.
              </p>

              <p className="font-inter text-text-secondary text-base leading-relaxed mb-8 max-w-xl">
                Seja para professores, estudantes ou entusiastas, o eBook oferece uma forma
                interativa de explorar conceitos científicos através de experiências práticas.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-left">
                {includes.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 font-inter text-sm text-text-secondary">
                    <span className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-brand-blue" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href={EBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 rounded-lg bg-brand-blue text-white font-bold text-base shadow-lg shadow-brand-blue/20 hover:bg-brand-blue-light hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Download size={19} className="group-hover:translate-y-0.5 transition-transform" />
                  Baixar eBook agora
                </a>

                <a
                  href="/contato"
                  className="px-8 py-4 rounded-lg bg-white border border-brand-blue/20 text-brand-blue font-semibold text-base hover:bg-brand-blue-mist transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Mail size={17} />
                  Falar com a equipe
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SOBRE O MATERIAL ── */}
      <section className="w-full bg-brand-blue-pale py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...reveal} className="relative bg-white rounded-3xl border border-brand-blue/10 p-8 md:p-12 shadow-sm">
            <span className="font-space-mono text-brand-accent text-xs uppercase tracking-widest font-bold flex items-center gap-2 mb-4">
              <Sparkles size={12} /> Sobre o material
            </span>
            <p className="font-inter text-text-secondary text-base md:text-lg leading-relaxed mb-4">
              Nossa missão é popularizar Astronomia e Astronáutica realizando ações itinerantes
              de divulgação científica na região Nordeste, principalmente nos estados da Bahia e
              do Rio Grande do Norte.
            </p>
            <p className="font-inter text-text-secondary text-base md:text-lg leading-relaxed">
              As oficinas de expansão do universo, montagem de lunetas, espectrógrafo e foguetes,
              junto com a Trilha Científica, usam experimentos para ensinar e interagir com
              estudantes do ensino básico de escolas públicas, possibilitando a execução de
              atividades práticas e lúdicas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── O QUE TEM DENTRO ── */}
      <section className="w-full bg-white py-16 md:py-24 border-y border-border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-space-grotesk font-bold text-brand-blue" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              O que você vai encontrar
            </h2>
            <p className="font-inter text-text-secondary mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Uma seleção de experimentos práticos e lúdicos que podem auxiliar no ensino de
              ciências nas escolas.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {chapters.map((chapter) => {
              const Icon = chapter.icon;
              return (
                <motion.div
                  key={chapter.title}
                  variants={staggerItem}
                  className="bg-surface-alt border border-slate-100 rounded-2xl p-6 hover:border-brand-blue/10 hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue-pale text-brand-blue flex items-center justify-center mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-space-grotesk font-bold text-text-primary text-base mb-2 leading-snug">
                    {chapter.title}
                  </h3>
                  <p className="font-inter text-text-secondary text-sm leading-relaxed">
                    {chapter.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── PARA QUEM É ── */}
      <section className="w-full bg-slate-50/50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-space-grotesk font-bold text-brand-blue" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              Para quem é este eBook
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {audiences.map((audience) => {
              const Icon = audience.icon;
              return (
                <div
                  key={audience.title}
                  className="bg-white border border-slate-100 rounded-2xl p-7 text-center hover:shadow-[0_8px_30px_rgb(0,71,117,0.04)] hover:border-brand-blue/10 transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-accent-light text-brand-accent flex items-center justify-center mb-5">
                    <Icon size={25} />
                  </div>
                  <h3 className="font-space-grotesk font-bold text-text-primary text-lg mb-2">
                    {audience.title}
                  </h3>
                  <p className="font-inter text-text-secondary text-sm leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Download CTA */}
          <div className="mt-14 md:mt-20 rounded-3xl bg-brand-blue px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,160,23,0.18),transparent_60%)] pointer-events-none" />
            <div className="relative z-10 text-center md:text-left">
              <h3 className="font-space-grotesk font-bold text-white text-2xl md:text-3xl mb-2">
                Pronto para levar o universo para a sala?
              </h3>
              <p className="font-inter text-white/70 text-sm md:text-base max-w-xl">
                O download é gratuito e pode ser compartilhado com toda a sua escola.
              </p>
            </div>
            <a
              href={EBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 shrink-0 px-7 py-3.5 rounded-xl bg-brand-accent text-brand-blue font-bold text-sm hover:bg-amber-300 transition-all duration-200 flex items-center gap-2"
            >
              <Download size={17} />
              Baixar eBook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
