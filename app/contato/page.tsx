import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { PageHero } from "@/components/PageHero";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contato — Cometa Nordestino",
  description: "Fale com a equipe do Cometa Nordestino: solicite uma visita na sua escola, proponha uma parceria ou tire dúvidas sobre o projeto.",
  openGraph: {
    title: "Contato — Cometa Nordestino",
    description: "Fale com a equipe do Cometa Nordestino: solicite uma visita na sua escola, proponha uma parceria ou tire dúvidas sobre o projeto.",
    type: "website",
    locale: "pt_BR",
    url: "https://cometanordestino.edu.br/contato",
  },
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-surface relative overflow-x-hidden">
      <ParticlesBackground />
      <Header />
      <PageHero
        breadcrumb="Contato"
        title="Vamos conversar"
        accent="sobre o cosmos"
        description="Seja para levar o projeto à sua escola, propor uma parceria ou tirar dúvidas, a nossa equipe está à disposição."
      />
      <ContactPageClient />
      <Footer />
    </main>
  );
}
