import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/anim/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Research } from "@/components/sections/Research";
import { PhotoScroll } from "@/components/sections/PhotoScroll";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Community } from "@/components/sections/Community";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

/**
 * Temiloluwa Samuel Ajayi — digital resume.
 * Structure: kolabdul · hero energy: robin-noguier · work ledger + page
 * dip: dionpieters · every surface, color and effect: Inchstone.
 *
 * Footer reveal: the content layer is opaque with z-10; Contact sits
 * sticky at the viewport bottom BEHIND it and is uncovered on the final
 * screen of scroll — the Robin Noguier signature.
 */
export default function Home() {
  return (
    <>
      <ScrollProgress />
      <div data-scroll-content className="relative">
        <div className="relative z-10 bg-paper">
          <Nav />
          <main>
            <Hero />
            <Marquee />
            <About />
            <Research />
            <PhotoScroll />
            <Work />
            <Experience />
            <Certifications />
            <Community />
            <Skills />
          </main>
        </div>
        <Contact />
      </div>
    </>
  );
}