import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { PageHero } from "@/components/PageHero";
import { EbookPageClient } from "./EbookPageClient";

export const metadata: Metadata = {
  title: "eBook — Cometa Nordestino",
  description: "Baixe gratuitamente o eBook de experimentos de Astronomia e Astronáutica do Cometa Nordestino, com atividades práticas para escolas.",
  openGraph: {
    title: "eBook — Cometa Nordestino",
    description: "Baixe gratuitamente o eBook de experimentos de Astronomia e Astronáutica do Cometa Nordestino, com atividades práticas para escolas.",
    type: "website",
    locale: "pt_BR",
    url: "https://cometanordestino.edu.br/ebook",
  },
};

export default function EbookPage() {
  return (
    <main className="flex min-h-screen flex-col bg-surface relative overflow-x-hidden">
      <ParticlesBackground />
      <Header />
      <PageHero
        breadcrumb="eBook"
        title="O universo em"
        accent="suas mãos"
        description="Um material gratuito com os principais experimentos e oficinas que levamos às escolas públicas do Nordeste."
      />
      <EbookPageClient />
      <Footer />
    </main>
  );
}
