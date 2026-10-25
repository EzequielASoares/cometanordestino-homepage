import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { School, Sparkles, Calendar, UserPlus, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Participe — Cometa Nordestino",
  description: "Traga o projeto para sua escola ou junte-se à nossa equipe de divulgação científica no Nordeste.",
};

export default function ParticiparPage() {
  return (
    <main className="flex min-h-screen flex-col bg-surface relative overflow-x-hidden">
      <ParticlesBackground />
      <Header />

      {/* Hero Banner */}
      <section className="relative w-full pt-36 pb-16 md:pt-44 md:pb-24 bg-gradient-to-b from-brand-blue via-brand-blue/98 to-brand-blue-light/95 flex flex-col items-center justify-center text-center px-6">
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
            <span className="text-brand-accent font-bold">Participe</span>
          </div>

          <h1 className="font-space-grotesk font-extrabold text-white tracking-tight mb-4 leading-tight" style={{ fontSize: "clamp(2.3rem, 5vw, 4.2rem)" }}>
            Faça Parte do <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-brand-accent bg-clip-text text-transparent inline-block">Cometa</span>
          </h1>

          <p className="font-inter text-white/80 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Seja abrindo as portas da sua escola para nossas oficinas ou vestindo o nosso jaleco de divulgador científico.
          </p>
        </div>
      </section>

      {/* Main Dual Choices */}
      <section className="w-full bg-slate-50/50 py-16 md:py-24 relative z-10 flex-grow">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            
            {/* Card 1: Schools */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-[0_12px_40px_rgba(0,71,117,0.04)] hover:border-brand-blue/10 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-blue-pale text-brand-blue flex items-center justify-center mb-6">
                  <School size={28} className="text-brand-blue" />
                </div>
                
                <h2 className="font-space-grotesk font-bold text-2xl text-text-primary mb-3">
                  Para Escolas Públicas
                </h2>
                
                <p className="font-inter text-text-secondary text-sm md:text-base leading-relaxed mb-6">
                  Quer levar o Cometa Nordestino para seus alunos? Realizamos observações do céu por telescópios, sessões de planetário digital móvel, lançamentos de foguetes didáticos e gincanas científicas de forma <strong>totalmente gratuita</strong>.
                </p>

                <div className="h-px bg-slate-100 my-6" />

                <h3 className="font-space-mono text-brand-blue text-xs uppercase tracking-widest font-bold mb-4">
                  O que oferecemos:
                </h3>
                
                <ul className="flex flex-col gap-3 mb-8">
                  {["Oficina de construção de lunetas caseiras", "Lançamentos experimentais de foguetes PET", "Visualização da Lua e planetas via telescópio", "Planetário inflável imersivo"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="mailto:leonardo.almeida@ufrn.br?subject=Solicita%C3%A7%C3%A3o%20de%20Visita%20-%20Cometa%20Nordestino&body=Ol%C3%A1%20equipe%20do%20Cometa%20Nordestino%2C%0A%0AGostaria%20de%20solicitar%20uma%20visita%20do%20projeto%20na%20nossa%20escola.%0A%0ANome%20da%20Escola%3A%20%0ACidade%2FEstado%3A%20%0ANome%20do%20Respons%C3%A1vel%3A%20%0ATelefone%20de%20Contato%3A%20"
                className="w-full py-4 px-6 rounded-xl bg-brand-blue text-white text-center font-semibold hover:bg-brand-blue-light transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Calendar size={18} />
                Solicitar Visita por E-mail
              </a>
            </div>

            {/* Card 2: Students/Volunteers */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-[0_12px_40px_rgba(0,71,117,0.04)] hover:border-brand-blue/10 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-accent-light text-brand-accent flex items-center justify-center mb-6">
                  <Sparkles size={28} className="text-brand-accent" />
                </div>
                
                <h2 className="font-space-grotesk font-bold text-2xl text-text-primary mb-3">
                  Para Estudantes e Voluntários
                </h2>
                
                <p className="font-inter text-text-secondary text-sm md:text-base leading-relaxed mb-6">
                  Estuda na UFRN, IFBA ou UEFS? Participe ativamente das nossas viagens e ações como bolsista ou voluntário. Ajude a ensinar física, astronomia e programação de forma leve e prática para milhares de jovens nordestinos.
                </p>

                <div className="h-px bg-slate-100 my-6" />

                <h3 className="font-space-mono text-brand-blue text-xs uppercase tracking-widest font-bold mb-4">
                  Por que fazer parte:
                </h3>
                
                <ul className="flex flex-col gap-3 mb-8">
                  {["Experiência prática em extensão universitária", "Oportunidades de bolsas de incentivo CNPq/IES", "Viagens e contato com realidades de todo o interior", "Horas complementares acadêmicas"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="mailto:leonardo.almeida@ufrn.br?subject=Interesse%20em%20Fazer%20Parte%20da%20Equipe%20-%20Cometa%20Nordestino&body=Ol%C3%A1%20equipe%20do%20Cometa%20Nordestino%2C%0A%0ATenho%20interesse%20em%20fazer%20parte%20da%20equipe%20do%20projeto.%0A%0ANome%20Completo%3A%20%0ACurso%20e%20Per%C3%ADodo%3A%20%0AUniversidade%20(UFRN%2C%20IFBA%20ou%20UEFS)%3A%20%0APor%20que%20gostaria%20de%20participar%3F%20"
                className="w-full py-4 px-6 rounded-xl bg-surface border border-brand-blue text-brand-blue text-center font-semibold hover:bg-brand-blue-mist transition-all duration-200 flex items-center justify-center gap-2"
              >
                <UserPlus size={18} />
                Quero me Candidatar
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
