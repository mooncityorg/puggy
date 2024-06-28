import CapSection from "@/components/CapSection";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import MovingBar from "@/components/MovingBar";
import Roadmap from "@/components/Roadmap";
import Socials from "@/components/Socials";
import Tokenomics from "@/components/Tokenomics";

export default function Home() {
  return (
    <main>
      <Hero />
      <MovingBar />
      <CapSection />
      <Roadmap />
      <Tokenomics />
      <Features />
      <Intro media="/media/fight.mov" />
      <Socials />
    </main>
  );
}
