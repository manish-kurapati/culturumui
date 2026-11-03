import { useEffect } from "react";
import CulturumWordmark from "./components/CulturumWordmark";
import ScrollTileBorder from "./components/ScrollTileBorder";
import AboutSection from "./components/AboutSection";
import EventsSection from "./components/EventsSection";
import ProcessSection from "./components/ProcessSection";
import VisualJourneySection from "./components/VisualJourneySection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import AllEventsPage from "./components/AllEventsPage";
import CreatorsSection from "./components/CreatorsSection";

export default function App() {
  const isAllEventsPage = new URLSearchParams(window.location.search).get("view") === "events";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("section") === "about" || window.location.hash === "#about") {
      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({ behavior: "instant" });
      }, 100);
    }
  }, []);

  if (isAllEventsPage) {
    return <AllEventsPage />;
  }

  return (
    <main>
      <ScrollTileBorder direction="left" speed={0.7} />

      <section className="hero" id="home">
        <div className="hero-distress-layer" aria-hidden="true" />

        <nav className="nav" aria-label="Main navigation">
          <a href="#about"><span>ABOUT</span><i aria-hidden="true" /></a>
          <a href="#events"><span>EVENTS</span><i aria-hidden="true" /></a>
          <a href="#journal"><span>EXPLORE ARTS</span><i aria-hidden="true" /></a>
          <a href="#contact"><span>CONTACT</span><i aria-hidden="true" /></a>
        </nav>

        <CulturumWordmark />
        <div className="discipline" aria-label="Where art connects">
          <span className="discipline-line left" aria-hidden="true" />
          <i className="discipline-star" aria-hidden="true" />
          <p>ROOTED IN CULTURE. ALIVE IN ART.</p>
          <i className="discipline-star" aria-hidden="true" />
          <span className="discipline-line right" aria-hidden="true" />
        </div>
      </section>

      <ScrollTileBorder direction="left" speed={0.7} />

      <AboutSection isCulturumMode />

      <EventsSection />

      <CreatorsSection />

      <ScrollTileBorder direction="left" speed={0.7} />

      <ProcessSection />

      <VisualJourneySection />

      <ScrollTileBorder direction="left" speed={0.7} />

      <ContactSection />

      <FooterSection />
    </main>
  );
}
