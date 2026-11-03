const CREATORS = [
  {
    name: "Aarohi Rao",
    discipline: "Traditional Painter",
    focus: "Folk narratives & natural pigments",
    image: "/assets/creators-line-art/aarohi-rao.png",
  },
  {
    name: "Kabir Mehta",
    discipline: "Ceramic Artist",
    focus: "Hand-built forms & earthen craft",
    image: "/assets/creators-line-art/kabir-mehta.png",
  },
  {
    name: "Meera Nair",
    discipline: "Folk Musician",
    focus: "Voice, memory & living traditions",
    image: "/assets/creators-line-art/meera-nair.png",
  },
  {
    name: "Arjun Varma",
    discipline: "Visual Storyteller",
    focus: "Illustration, motion & folklore",
    image: "/assets/creators-line-art/arjun-varma.png",
  },
];

export default function CreatorsSection() {
  return (
    <section className="creators-section" id="creators" aria-labelledby="creators-title">
      <div className="creators-heading-row">
        <div>
          <p>Meet the makers</p>
          <h2 id="creators-title">Creators</h2>
        </div>
        <p className="creators-intro">
          Artists, makers, musicians, and storytellers carrying Indian creative traditions into
          new forms.
        </p>
      </div>

      <div className="creators-grid">
        {CREATORS.map((creator, index) => (
          <article className="creator-profile-card" key={creator.name}>
            <div className="creator-portrait">
              <img src={creator.image} alt={`${creator.name}, ${creator.discipline}`} loading="lazy" />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="creator-profile-copy">
              <p>{creator.discipline}</p>
              <h3>{creator.name}</h3>
              <span>{creator.focus}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
