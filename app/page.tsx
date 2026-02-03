import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <section id="início" className="min-h-screen flex flex-col">
        <Hero />

        <div className="mt-auto">
          <TechStack />
        </div>
      </section>

      <section id="sobre" className="relative overflow-x-hidden">
        <About />
      </section>

      <section id="projetos" className="relative overflow-x-hidden">
        <Projects />
      </section>

      <section id="contato">
        <Contact />
      </section>
    </>
  );
}
