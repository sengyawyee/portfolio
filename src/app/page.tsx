import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import StructuredData from "@/components/seo/StructuredData";
import About from "@/components/sections/About";
import AgenticWorkflowSection from "@/components/sections/AgenticWorkflowSection";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import SelectedProjects from "@/components/sections/SelectedProjects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <SelectedProjects />
        <AgenticWorkflowSection />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
