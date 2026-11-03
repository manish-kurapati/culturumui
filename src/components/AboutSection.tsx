import { useEffect, useRef } from "react";

interface AboutSectionProps {
  isCulturumMode?: boolean;
}

function AboutImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="about-image-frame">
      <img src={src} alt={alt} />
    </div>
  );
}

export default function AboutSection({ isCulturumMode = true }: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let animationFrame = 0;

    const updateGalleryPosition = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;

        const bounds = section.getBoundingClientRect();
        const travelArea = window.innerHeight + bounds.height;
        const progress = Math.min(1, Math.max(0, (window.innerHeight - bounds.top) / travelArea));

        section.style.setProperty("--about-shift-forward", `${-180 + progress * 360}px`);
        section.style.setProperty("--about-shift-reverse", `${180 - progress * 360}px`);
      });
    };

    updateGalleryPosition();
    window.addEventListener("scroll", updateGalleryPosition, { passive: true });
    window.addEventListener("resize", updateGalleryPosition);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateGalleryPosition);
      window.removeEventListener("resize", updateGalleryPosition);
    };
  }, []);

  return (
    <section
      className="about-section"
      id="about"
      aria-labelledby="about-us-title"
      ref={sectionRef}
    >
      <div className="about-floating-gallery" aria-hidden="true">
        <div className="about-floating-track about-floating-track--forward">
          <figure className="about-floating-card">
            <img src="/assets/about-line-art-v2/floating-painter-bw.png" alt="" />
          </figure>
          <figure className="about-floating-card">
            <img src="/assets/about-line-art-v2/floating-gallery-bw.png" alt="" />
          </figure>
        </div>
        <div className="about-floating-track about-floating-track--reverse">
          <figure className="about-floating-card">
            <img src="/assets/about-line-art-v2/floating-potter-bw.png" alt="" />
          </figure>
          <figure className="about-floating-card">
            <img src="/assets/about-line-art-v2/floating-musician-bw.png" alt="" />
          </figure>
        </div>
      </div>

      <div className="about-intro" aria-hidden="true">
        <span />
        <p>Our story</p>
        <span />
      </div>

      <div className="about-editorial-row about-editorial-row--image-right">
        <div className="about-editorial-copy">
          <p className="about-eyebrow">Rooted in art · Built for artists</p>
          <h2 id="about-us-title">About Us</h2>
          <p className="about-lead">
            Chitrakula is a community platform dedicated to traditional Indian art and the people
            who keep it alive.
          </p>
          <p>
            We help artists share and sell their paintings online, while creating meaningful
            spaces for art events, cultural stalls, music gatherings, and celebrations of our
            Indian-rooted heritage.
          </p>

          <div className="about-founders" aria-label="Chitrakula founders">
            <div>
              <span>Founder</span>
              <strong>Alekhya Vulluri</strong>
            </div>
            <div>
              <span>Co-founder</span>
              <strong>Likith Reddy</strong>
            </div>
          </div>
        </div>

        <div className="about-editorial-media">
          <div className="about-frame-accent about-frame-accent--top" aria-hidden="true" />
          <AboutImage
            src="/assets/about-line-art-v2/about-founders-bw.png"
            alt="Two Chitrakula founders presenting Indian artwork"
          />
          <div className="about-frame-accent about-frame-accent--bottom" aria-hidden="true" />
        </div>
      </div>

      <div className="about-divider" aria-hidden="true">
        <span />
        <i>✦</i>
        <span />
      </div>

      <div className="about-editorial-row about-editorial-row--image-left">
        <div className="about-editorial-media">
          <div className="about-frame-accent about-frame-accent--top" aria-hidden="true" />
          <AboutImage
            src="/assets/about-line-art-v2/about-culture-bw.png"
            alt="An artist painting while a visitor admires her work"
          />
          <div className="about-frame-accent about-frame-accent--bottom" aria-hidden="true" />
        </div>

        <div className="about-editorial-copy">
          <p className="about-eyebrow">Why we began</p>
          <h2>About {isCulturumMode ? "Culturum" : "Chitrakula"}</h2>
          <p className="about-lead">
            One platform where artists are discovered, traditions are celebrated, and Indian
            culture finds new audiences.
          </p>
          <p>
            We started Chitrakula to help artists build a wider audience and earn from their work.
            At the same time, we wanted to bring the many expressions of Indian culture together
            in one place—from painting and craft to music, performance, and community events.
          </p>
          <p>
            Every exhibition, marketplace, and gathering is an invitation to experience our
            heritage as something living: made by artists, shared by communities, and carried
            forward with pride.
          </p>
        </div>
      </div>
    </section>
  );
}
