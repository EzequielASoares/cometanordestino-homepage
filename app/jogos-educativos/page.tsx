import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { PageHero } from "@/components/PageHero";
import { GamesPageClient } from "./GamesPageClient";

export const metadata: Metadata = {
  title: "Jogos Educativos — Cometa Nordestino",
  description: "Jogue gratuitamente e aprenda astronomia e astronáutica com os jogos educativos criados pela equipe do Cometa Nordestino.",
  openGraph: {
    title: "Jogos Educativos — Cometa Nordestino",
    description: "Jogue gratuitamente e aprenda astronomia e astronáutica com os jogos educativos criados pela equipe do Cometa Nordestino.",
    type: "website",
    locale: "pt_BR",
    url: "https://cometanordestino.edu.br/jogos-educativos",
  },
};

export default function GamesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-surface relative overflow-x-hidden">
      <ParticlesBackground />
      <Header />
      <PageHero
        breadcrumb="Jogos Educativos"
        title="Viajando pelo"
        accent="Espaço"
        description="Prepare-se para uma viagem intergaláctica! Explore planetas, estrelas e galáxias através de jogos interativos feitos para aprender brincando."
      />
      <GamesPageClient />
      <Footer />
    </main>
  );
}
