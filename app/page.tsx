import Navigation from "@/components/shared/Navigation";
import Footer from "@/components/shared/Footer";
import ScrollProvider from "@/components/shared/ScrollProvider";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <ScrollProvider />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Services />
        <Process />
        <Projects />
        <Testimonials />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
