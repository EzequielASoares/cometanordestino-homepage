import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { TeamPageClient } from "./TeamPageClient";

export const metadata: Metadata = {
  title: "A Tripulação — Cometa Nordestino",
  description: "Conheça a equipe de cientistas, professores, desenvolvedores e estudantes que levam a astronomia e a ciência para escolas públicas do Nordeste brasileiro.",
  openGraph: {
    title: "A Tripulação — Cometa Nordestino",
    description: "Conheça a equipe de cientistas, professores, desenvolvedores e estudantes que levam a astronomia e a ciência para escolas públicas do Nordeste brasileiro.",
    type: "website",
    locale: "pt_BR",
    url: "https://cometanordestino.edu.br/equipe",
  }
};

export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col bg-surface relative overflow-x-hidden">
      <ParticlesBackground />
      <Header />
      <TeamPageClient />
      <Footer />
    </main>
  );
}
