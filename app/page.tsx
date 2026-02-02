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

      <section id="sobre">
        <About />
      </section>

      <section id="projetos">
        <Projects />
      </section>

      <section id="contato">
        <Contact />
      </section>
    </>
  );
}
