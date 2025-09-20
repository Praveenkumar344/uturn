
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Features from "../sections/Features";
import Team from "../sections/Team";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToId } from "../hooks/scrollToId";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      scrollToId(id);

      // Clear state so it doesn't trigger again on re-render
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <main className="pt-20 md:pt-24">
        <Hero />
        <Services />
        <About />
        <Features />
        <Team />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
