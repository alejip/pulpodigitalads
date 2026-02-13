import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { About } from "@/components/about";
import { Marquee } from "@/components/marquee";
import { Services } from "@/components/services";
import { Philosophy } from "@/components/philosophy";
import { Projects } from "@/components/projects";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Marquee />
        <Services />
        <Philosophy />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
