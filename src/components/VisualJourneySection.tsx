import { sounds } from "../utils/soundEffects";

const ARTWORKS = [
  {
    title: "Lotus Keeper",
    type: "Limited Edition Art Print",
    medium: "Fine-art pigment ink on archival cotton paper",
    dimensions: "18 × 24 in · Edition of 25",
    price: "₹12,800",
    image: "/assets/shop-line-art/lotus-keeper.png",
    alt: "Minimal line artwork of a woman holding a lotus beneath sweeping leaves",
  },
  {
    title: "Monsoon Courtyard",
    type: "Limited Edition Art Print",
    medium: "Fine-art pigment ink on archival cotton paper",
    dimensions: "18 × 24 in · Edition of 25",
    price: "₹15,500",
    image: "/assets/shop-line-art/monsoon-courtyard.png",
    alt: "Minimal line artwork of a rain-filled Indian courtyard",
  },
  {
    title: "Raga at Dusk",
    type: "Limited Edition Art Print",
    medium: "Fine-art pigment ink on archival cotton paper",
    dimensions: "18 × 24 in · Edition of 25",
    price: "₹14,200",
    image: "/assets/shop-line-art/raga-at-dusk.png",
    alt: "Minimal line artwork of an Indian musician playing the tanpura",
  },
  {
    title: "Peacock Garden",
    type: "Limited Edition Art Print",
    medium: "Fine-art pigment ink on archival cotton paper",
    dimensions: "18 × 24 in · Edition of 25",
    price: "₹13,600",
    image: "/assets/shop-line-art/peacock-garden.png",
    alt: "Minimal line artwork of a peacock among lotus flowers and leaves",
  },
];

export default function VisualJourneySection() {
  return (
    <section className="explore-arts-section" id="journal" aria-labelledby="explore-arts-title">
      <div className="explore-arts-header">
        <div>
          <p>Paintings · Prints · Collectibles</p>
          <h2 id="explore-arts-title">Explore Arts</h2>
        </div>
        <p className="explore-arts-intro">
          Collect original visual stories inspired by Indian art, music, nature, and living
          traditions. Each edition is produced in small numbers on archival paper.
        </p>
      </div>

      <div className="explore-arts-grid">
        {ARTWORKS.map((artwork, index) => (
          <article className="shop-art-card" key={artwork.title}>
            <div className="shop-art-image">
              <img src={artwork.image} alt={artwork.alt} loading="lazy" />
              <span className="shop-art-index">{String(index + 1).padStart(2, "0")}</span>
            </div>

            <div className="shop-art-copy">
              <p>{artwork.type}</p>
              <h3>{artwork.title}</h3>
              <span className="shop-art-medium">{artwork.medium}</span>
              <span className="shop-art-dimensions">{artwork.dimensions}</span>

              <div className="shop-art-purchase">
                <strong>{artwork.price}</strong>
                <a href="#contact" onClick={() => sounds.playTap()}>
                  Enquire to buy <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
