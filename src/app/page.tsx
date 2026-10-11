import BackgroundScene from "@/components/BackgroundScene";
import Particles from "@/components/Particles";
import CursorFX from "@/components/CursorFX";
import Navbar from "@/components/Navbar";
import Terminal from "@/components/Terminal";
import KonamiEasterEgg from "@/components/KonamiEasterEgg";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import PsychSirAI from "@/components/sections/PsychSirAI";
import TechStack from "@/components/sections/TechStack";
import Achievements from "@/components/sections/Achievements";
import SocialProof from "@/components/sections/SocialProof";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <BackgroundScene />
      <Particles />
      <CursorFX />
      <KonamiEasterEgg />

      <div className="relative z-10 noise-grid">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <PsychSirAI />
          <TechStack />
          <Achievements />
          <SocialProof />
          <Contact />
        </main>
        <Footer />
      </div>

      <Terminal />
    </>
  );
}
