import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Pillars } from "../components/Pillars";
import { Cities } from "../components/Cities";
import { Workshops } from "../components/Workshops";
import { Missions } from "../components/Missions";
import { MissionPatches } from "../components/MissionPatches";
import { Team } from "../components/Team";
import { Gallery } from "../components/Gallery";
import { EbookCTA } from "../components/EbookCTA";
import { Sponsors } from "../components/Sponsors";
import { Footer } from "../components/Footer";

import { ParticlesBackground } from "../components/ParticlesBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-surface relative">
      <ParticlesBackground />
      <Header />
      <Hero />
      <About />
      <Pillars />
      <Cities />
      <Workshops />
      <Missions />
      <MissionPatches />
      <Team />
      <Gallery />
      <EbookCTA />
      <Sponsors />
      <Footer />
    </main>
  );
}
