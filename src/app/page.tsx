import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import StructuredData from "@/components/seo/StructuredData";
import About from "@/components/sections/About";
import Capabilities from "@/components/sections/Capabilities";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import FrontendApproach from "@/components/sections/FrontendApproach";
import Hero from "@/components/sections/Hero";
import SelectedProjects from "@/components/sections/SelectedProjects";
import TechStack from "@/components/sections/TechStack";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <SelectedProjects />
        <Capabilities />
        <FrontendApproach />
        <TechStack />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
