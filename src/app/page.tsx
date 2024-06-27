import CapSection from "@/components/CapSection";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import MovingBar from "@/components/MovingBar";
import Socials from "@/components/Socials";
import Tokenomics from "@/components/Tokenomics";

export default function Home() {
  return (
    <main>
      <Hero />
      <MovingBar />
      <CapSection />
      <Tokenomics />
      <Features />
      <Intro media="/media/puggyjetski_copie_2.mov" />
      <Socials />
      <Intro media="/media/fight.mov" />
    </main>
  );
}
