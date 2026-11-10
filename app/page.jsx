import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CaseStudySection from "@/components/CaseStudySection";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import OpenCaseOnHash from "@/components/OpenCaseOnHash";
import { projects, research } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main" className="wrap">
        <Hero />
        <About />
        <Skills />
        <CaseStudySection id="projects" title="Featured projects" subtitle="Applied ML pipelines. Select a project to open its case study." studies={projects} />
        <CaseStudySection id="research" title="Research implementations" subtitle="Architectures reimplemented from scratch in PyTorch and checked against published results." studies={research} />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <OpenCaseOnHash />
    </>
  );
}
