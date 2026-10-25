import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  breadcrumb: string;
  title: string;
  accent?: string;
  description: string;
}

export const PageHero = ({ breadcrumb, title, accent, description }: PageHeroProps) => {
  return (
    <section className="relative w-full pt-36 pb-20 md:pt-44 md:pb-28 bg-gradient-to-b from-brand-blue via-brand-blue/98 to-brand-blue-light/95 overflow-hidden flex flex-col items-center justify-center text-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,95,158,0.12),transparent_60%)] pointer-events-none" />

      {/* Comet animation */}
      <div className="absolute top-24 left-0 w-[4px] h-[4px] rounded-full bg-brand-accent animate-comet z-0 opacity-60">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[150px] h-[1.5px] bg-gradient-to-l from-brand-accent via-white/20 to-transparent blur-[0.5px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 mb-6 text-white/80 text-xs font-space-mono backdrop-blur-sm">
          <Link href="/" className="hover:text-white transition-colors">
            Início
          </Link>
          <ChevronRight size={10} className="text-white/40" />
          <span className="text-brand-accent font-bold">{breadcrumb}</span>
        </div>

        <h1
          className="font-space-grotesk font-extrabold text-white tracking-tight mb-4 leading-tight"
          style={{ fontSize: "clamp(2.3rem, 5vw, 4.2rem)" }}
        >
          {title}{" "}
          {accent && (
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-brand-accent bg-clip-text text-transparent inline-block">
              {accent}
            </span>
          )}
        </h1>

        <p className="font-inter text-white/80 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};
