"use client";

import { motion } from "framer-motion";
import { Gamepad2, ExternalLink, Trophy, Smartphone, Sparkles, Lightbulb, Users } from "lucide-react";
import { staggerContainer, staggerItem } from "@/hooks/useScrollReveal";

const games = [
  {
    title: "Calculando a Expansão do Universo",
    authors: "Poliana Araújo e Raphael Ramos",
    type: "Simulação interativa",
    description:
      "Uma exploração envolvente e divertida da expansão do universo. O gráfico interativo convida os participantes a visualizar esse fenômeno e a compreender a dinâmica do espaço-tempo na física.",
    highlights: [
      "Gráfico interativo da expansão do universo",
      "Diálogo direto com a oficina Espaço-Tempo",
      "Ideal para turmas do ensino médio",
    ],
    image: "/images/jogos/expansao-do-universo.jpg",
    imageClass: "object-top",
    href: "https://editor.p5js.org/polianaraujo/full/32TzonRG5",
    accent: "from-sky-500 to-blue-600",
    badge: "bg-sky-50 text-sky-700 border-sky-100",
  },
  {
    title: "Desbravando os Corpos Astronômicos",
    authors: "Ezequiel Junior",
    type: "Quiz espacial",
    description:
      "Prepare-se para decolar em uma aventura intergaláctica de conhecimento e diversão! Quanto mais você joga, mais você aprende sobre os mistérios fascinantes do universo.",
    highlights: [
      "Teste seus conhecimentos sobre o cosmos",
      "Aprendizado sobre corpos celestes",
      "Desafie seus amigos para ver quem sabe mais",
    ],
    image: "/images/jogos/desbravando-corpos-celestes.jpg",
    imageClass: "object-center",
    href: "https://editor.p5js.org/ezequieljr185/full/_m2TXyPpw",
    accent: "from-violet-500 to-indigo-600",
    badge: "bg-violet-50 text-violet-700 border-violet-100",
  },
  {
    title: "Astrokid",
    authors: "Elaine Oliveira",
    type: "Quiz para crianças",
    description:
      "Um jogo educativo de astronomia pensado para crianças e adolescentes, que envolve o participante com a ciência de forma lúdica. A cada acerto uma nova pergunta aparece; se errar, é só voltar ao menu e tentar de novo.",
    highlights: [
      "Use os botões laranja na tela para jogar",
      "Curiosidades sobre planetas e suas atmosferas",
      "Linguagem leve para os pequenos exploradores",
    ],
    image: "/images/jogos/astrokid.jpg",
    imageClass: "object-center",
    href: "https://editor.p5js.org/elaineoliveiraufrn/full/zBzd2_Ih8",
    accent: "from-amber-400 to-orange-500",
    badge: "bg-amber-50 text-amber-700 border-amber-100",
  },
];

const steps = [
  {
    icon: Gamepad2,
    title: "Escolha um jogo",
    description: "Todos rodam direto no navegador, sem instalar nada e sem cadastro.",
  },
  {
    icon: Smartphone,
    title: "Jogue onde quiser",
    description: "Funciona no computador, no tablet ou no celular — em casa ou na escola.",
  },
  {
    icon: Trophy,
    title: "Aprenda brincando",
    description: "Cada partida reforça conceitos de astronomia e astronáutica vistos em sala.",
  },
];

export const GamesPageClient = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* ── INTRO STRIP ── */}
      <section className="w-full bg-white py-8 border-b border-border-light relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-0.5 text-center sm:text-left">
            <span className="font-space-mono text-brand-blue text-xs uppercase tracking-widest font-bold flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles size={11} className="text-brand-accent" /> Laboratório digital
            </span>
            <h2 className="font-space-grotesk font-bold text-text-primary text-lg">
              {games.length} jogos · 100% gratuitos · feitos pela nossa equipe
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {["Astronomia", "Astronáutica", "Diversão"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-xl text-xs md:text-sm font-medium text-text-secondary bg-surface-alt border border-border-light"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── GAMES GRID ── */}
      <section className="w-full bg-slate-50/50 py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {games.map((game) => (
              <motion.article
                key={game.title}
                variants={staggerItem}
                className="group bg-white border border-slate-100 rounded-3xl overflow-hidden flex flex-col hover:shadow-[0_12px_40px_rgba(0,71,117,0.08)] hover:border-brand-blue/10 transition-all duration-300"
              >
                {/* Cover */}
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-blue-pale">
                  <img
                    src={game.image}
                    alt={`Capa do jogo ${game.title}`}
                    className={`w-full h-full object-cover ${game.imageClass} transition-transform duration-700 group-hover:scale-105`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 via-brand-blue/10 to-transparent" />
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-tr ${game.accent} text-white flex items-center justify-center shadow-lg`}>
                    <Gamepad2 size={18} />
                  </div>
                  <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/95 border border-white/40 text-brand-blue text-[10px] font-bold uppercase tracking-widest font-space-mono">
                    {game.type}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6 md:p-7">
                  <h3 className="font-space-grotesk font-bold text-text-primary text-xl leading-snug mb-2">
                    {game.title}
                  </h3>

                  <span className={`self-start text-[10px] font-bold px-2 py-0.5 rounded-md border mb-4 ${game.badge}`}>
                    Por {game.authors}
                  </span>

                  <p className="font-inter text-text-secondary text-sm leading-relaxed mb-5">
                    {game.description}
                  </p>

                  <ul className="flex flex-col gap-2.5 mb-7">
                    {game.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs md:text-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={game.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full py-3.5 px-6 rounded-xl bg-brand-blue text-white text-center font-semibold text-sm hover:bg-brand-blue-light transition-all duration-200 flex items-center justify-center gap-2 group/play"
                  >
                    Jogar agora
                    <ExternalLink size={15} className="group-hover/play:translate-x-0.5 group-hover/play:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="w-full bg-white py-16 md:py-24 border-t border-border-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-space-grotesk font-bold text-brand-blue" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              Como funciona
            </h2>
            <p className="font-inter text-text-secondary mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Nossos jogos foram criados por estudantes do projeto para levar a astronomia
              para além dos muros da escola.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="bg-surface-alt border border-slate-100 rounded-2xl p-7 hover:border-brand-blue/10 hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue-pale text-brand-blue flex items-center justify-center mb-5">
                    <Icon size={22} />
                  </div>
                  <span className="font-space-mono text-brand-accent text-xs font-bold tracking-widest">
                    0{idx + 1}
                  </span>
                  <h3 className="font-space-grotesk font-bold text-text-primary text-lg mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="font-inter text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-14 md:mt-16 rounded-3xl bg-brand-blue px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,160,23,0.18),transparent_60%)] pointer-events-none" />
            <div className="relative z-10 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 mb-4 text-white/80 text-[10px] font-space-mono uppercase tracking-widest">
                <Lightbulb size={11} className="text-brand-accent" /> Ideias e parcerias
              </div>
              <h3 className="font-space-grotesk font-bold text-white text-2xl md:text-3xl mb-2">
                Quer criar um jogo com a gente?
              </h3>
              <p className="font-inter text-white/70 text-sm md:text-base max-w-xl">
                Estudantes das nossas instituições parceiras podem desenvolver novas
                atividades educativas junto à equipe.
              </p>
            </div>
            <a
              href="/contato"
              className="relative z-10 shrink-0 px-7 py-3.5 rounded-xl bg-brand-accent text-brand-blue font-bold text-sm hover:bg-amber-300 transition-all duration-200 flex items-center gap-2"
            >
              <Users size={17} />
              Falar com a equipe
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
