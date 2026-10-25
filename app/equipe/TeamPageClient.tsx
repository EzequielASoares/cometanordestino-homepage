"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  School, 
  BookOpen, 
  ChevronRight,
  ArrowRight
} from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  category: "coordenadores" | "professores" | "ativo" | "egressos";
  image?: string;
  initials: string;
  lattes?: string;
  institution: string;
}

const fullTeam: TeamMember[] = [
  // Coordenadores
  {
    name: "Prof. Leonardo Almeida",
    role: "Coordenador Geral do Projeto",
    category: "coordenadores",
    image: "/images/equipe/leonardo.jpg",
    initials: "LA",
    lattes: "http://lattes.cnpq.br/4422201314959132",
    institution: "UFRN",
  },
  {
    name: "Profª Selma Vieira",
    role: "Coordenadora do Polo IFBA",
    category: "coordenadores",
    image: "/images/equipe/selma.jpg",
    initials: "SV",
    lattes: "http://lattes.cnpq.br/2180479133649539",
    institution: "IFBA",
  },
  {
    name: "Prof. Marildo Pereira",
    role: "Coordenador do Polo UEFS",
    category: "coordenadores",
    image: "/images/equipe/marildo.jpg",
    initials: "MP",
    lattes: "http://lattes.cnpq.br/1674483758362947",
    institution: "UEFS",
  },
  // Professores
  {
    name: "Dr. Tarciro Mendes",
    role: "Professor colaborador",
    category: "professores",
    image: "/images/equipe/tarciro.jpg",
    initials: "TM",
    lattes: "http://lattes.cnpq.br",
    institution: "UFRN",
  },
  {
    name: "Dr. Pedro da Cunha",
    role: "Professor colaborador",
    category: "professores",
    image: "/images/equipe/pedro.jpg",
    initials: "PC",
    lattes: "http://lattes.cnpq.br",
    institution: "UFRN",
  },
  {
    name: "Dr. Leandro Beviláqua",
    role: "Professor colaborador",
    category: "professores",
    image: "/images/equipe/leandro.jpg",
    initials: "LB",
    lattes: "http://lattes.cnpq.br",
    institution: "UFRN",
  },
  {
    name: "Dr. Ronai Lisboa",
    role: "Professor colaborador",
    category: "professores",
    image: "/images/equipe/ronai.jpg",
    initials: "RL",
    lattes: "http://lattes.cnpq.br",
    institution: "UFRN",
  },
  // Integrantes Ativos
  {
    name: "Ezequiel Junior",
    role: "Desenvolvedor & Designer UI/UX",
    category: "ativo",
    image: "/images/equipe/ezequiel.jpg",
    initials: "EJ",
    lattes: "http://lattes.cnpq.br/1858763529486302",
    institution: "UFRN",
  },
  {
    name: "Elaine Oliveira",
    role: "Desenvolvedora Frontend",
    category: "ativo",
    image: "/images/equipe/elaine.jpg",
    initials: "EO",
    lattes: "http://lattes.cnpq.br",
    institution: "UFRN",
  },
  {
    name: "Alanna Costa",
    role: "Bolsista de Astronomia",
    category: "ativo",
    image: "/images/equipe/alanna.jpg",
    initials: "AC",
    lattes: "http://lattes.cnpq.br",
    institution: "UFRN",
  },
  {
    name: "Geovana Araujo",
    role: "Integrante",
    category: "ativo",
    image: "/images/equipe/geovana.jpg",
    initials: "GA",
    institution: "UFRN",
  },
  {
    name: "Lívia Silva",
    role: "Integrante",
    category: "ativo",
    image: "/images/equipe/livia.jpg",
    initials: "LS",
    institution: "UFRN",
  },
  {
    name: "João Rafael",
    role: "Integrante",
    category: "ativo",
    image: "/images/equipe/joao-rafael.jpg",
    initials: "JR",
    institution: "UFRN",
  },
  {
    name: "Emily Cabral",
    role: "Integrante",
    category: "ativo",
    image: "/images/equipe/emily.jpg",
    initials: "EC",
    institution: "UFRN",
  },
  {
    name: "Ailla Oliveira",
    role: "Integrante",
    category: "ativo",
    image: "/images/equipe/ailla.jpg",
    initials: "AO",
    institution: "UFRN",
  },
  {
    name: "Leonardo Oliveira",
    role: "Integrante",
    category: "ativo",
    image: "/images/equipe/leonardo-oliveira.jpg",
    initials: "LO",
    institution: "UFRN",
  },
  {
    name: "Maria Eduarda",
    role: "Integrante",
    category: "ativo",
    image: "/images/equipe/maria-eduarda.jpg",
    initials: "ME",
    institution: "UFRN",
  },
  {
    name: "Júlia Alanne",
    role: "Integrante",
    category: "ativo",
    image: "/images/equipe/julia.jpg",
    initials: "JA",
    institution: "UFRN",
  },
  {
    name: "Poliana Araújo",
    role: "Integrante",
    category: "ativo",
    image: "/images/equipe/poliana.jpg",
    initials: "PA",
    institution: "UFRN",
  },
  {
    name: "Marcos Silva",
    role: "Integrante",
    category: "ativo",
    image: "/images/equipe/marcos.jpg",
    initials: "MS",
    institution: "IFBA",
  },
  {
    name: "Alvaro Souza",
    role: "Integrante",
    category: "ativo",
    image: "/images/equipe/alvaro.jpg",
    initials: "AS",
    institution: "IFBA",
  },
  {
    name: "Evilin Miranda",
    role: "Integrante",
    category: "ativo",
    image: "/images/equipe/evilin.jpg",
    initials: "EM",
    institution: "IFBA",
  },
  {
    name: "João Vitor",
    role: "Integrante",
    category: "ativo",
    image: "/images/equipe/joao-vitor.jpg",
    initials: "JV",
    institution: "IFBA",
  },
  {
    name: "Lucas Fernandes",
    role: "Integrante",
    category: "ativo",
    image: "/images/equipe/lucas.jpg",
    initials: "LF",
    institution: "IFBA",
  },
];

const categories = [
  { id: "all", name: "Todos" },
  { id: "coordenadores", name: "Coordenadores" },
  { id: "professores", name: "Professores" },
  { id: "ativo", name: "Integrantes Ativos" },
];

export const TeamPageClient = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredTeam = selectedCategory === "all" 
    ? fullTeam 
    : fullTeam.filter(member => member.category === selectedCategory);

  const getInstitutionBadge = (inst: string) => {
    switch (inst) {
      case "UFRN": return "text-sky-700 bg-sky-50 border-sky-100";
      case "IFBA": return "text-emerald-700 bg-emerald-50 border-emerald-100";
      case "UEFS": return "text-amber-700 bg-amber-50 border-amber-100";
      default: return "text-slate-600 bg-slate-50 border-slate-100";
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* ── HERO BANNER ── */}
      <section className="relative w-full pt-36 pb-20 md:pt-44 md:pb-28 bg-gradient-to-b from-brand-blue via-brand-blue/98 to-brand-blue-light/95 overflow-hidden flex flex-col items-center justify-center text-center px-6">
        {/* Subtle decorative background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,95,158,0.12),transparent_60%)] pointer-events-none" />
        
        {/* Comet animation */}
        <div className="absolute top-24 left-0 w-[4px] h-[4px] rounded-full bg-brand-accent animate-comet z-0 opacity-60">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[150px] h-[1.5px] bg-gradient-to-l from-brand-accent via-white/20 to-transparent blur-[0.5px]" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 mb-6 text-white/80 text-xs font-space-mono backdrop-blur-sm">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <ChevronRight size={10} className="text-white/40" />
            <span className="text-brand-accent font-bold">Equipe</span>
          </div>

          <h1 className="font-space-grotesk font-extrabold text-white tracking-tight mb-4 leading-tight" style={{ fontSize: "clamp(2.3rem, 5vw, 4.2rem)" }}>
            Nossa <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-brand-accent bg-clip-text text-transparent inline-block">Tripulação</span>
          </h1>

          <p className="font-inter text-white/80 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Professores, pesquisadores e estudantes comprometidos com a popularização da ciência no Nordeste.
          </p>
        </div>
      </section>

      {/* ── FILTER SECTION ── */}
      <section className="w-full bg-white py-8 border-b border-border-light relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-0.5 text-center sm:text-left">
            <span className="font-space-mono text-brand-blue text-xs uppercase tracking-widest font-bold flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles size={11} className="text-brand-accent" /> Filtros
            </span>
            <h2 className="font-space-grotesk font-bold text-text-primary text-lg">Tripulação do Cometa</h2>
          </div>

          {/* Filters Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer overflow-hidden ${
                  selectedCategory === cat.id 
                    ? "text-white bg-brand-blue shadow-sm shadow-brand-blue/10" 
                    : "text-text-secondary bg-surface-alt border border-border-light hover:border-brand-blue/20 hover:bg-white"
                }`}
              >
                {selectedCategory === cat.id && (
                  <motion.span 
                    layoutId="activeFilterBgClean" 
                    className="absolute inset-0 bg-brand-blue -z-10" 
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM GRID ── */}
      <section className="w-full bg-slate-50/50 py-16 md:py-20 relative min-h-[400px]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredTeam.map((member) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  key={member.name}
                  className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-[0_8px_30px_rgb(0,71,117,0.04)] hover:border-brand-blue/10 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Big Photo Container */}
                  <div className="aspect-square w-full bg-slate-50 rounded-xl overflow-hidden mb-5 relative group flex items-center justify-center border border-slate-100">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" 
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-tr from-brand-blue/5 to-brand-blue-light/5 flex items-center justify-center">
                        <span className="font-space-grotesk font-bold text-brand-blue/30 text-5xl tracking-wider">
                          {member.initials}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info Section */}
                  <div className="flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-space-grotesk font-bold text-text-primary text-lg leading-snug">
                        {member.name}
                      </h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border shrink-0 flex items-center gap-1 ${getInstitutionBadge(member.institution)}`}>
                        <School size={10} />
                        {member.institution}
                      </span>
                    </div>
                    
                    <p className="font-inter text-text-secondary text-sm font-medium">
                      {member.role}
                    </p>

                    {/* Lattes Link at the Bottom */}
                    {member.lattes ? (
                      <div className="w-full border-t border-slate-100 pt-4 mt-auto">
                        <a
                          href={member.lattes}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold text-brand-blue hover:text-brand-blue-light group/lattes transition-colors duration-200"
                        >
                          <BookOpen size={13} className="text-brand-blue/70" />
                          <span>Currículo Lattes</span>
                          <ArrowRight size={11} className="opacity-0 -translate-x-1 group-hover/lattes:opacity-100 group-hover/lattes:translate-x-0 transition-all duration-200" />
                        </a>
                      </div>
                    ) : (
                      <div className="w-full border-t border-slate-100 pt-4 mt-auto">
                        <span className="text-[11px] text-text-muted font-space-mono">
                          Integrante {member.category === "egressos" ? "Egresso" : "Ativo"}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
