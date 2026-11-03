import { CULTURUM_EVENTS } from "./EventsSection";
import ScrollTileBorder from "./ScrollTileBorder";

export default function AllEventsPage() {
  return (
    <main className="all-events-page">
      <ScrollTileBorder direction="left" speed={0.7} />

      <header className="all-events-header">
        <a className="all-events-back" href="./#events" aria-label="Back to events">
          ←
        </a>
        <div>
          <p>Gather · Make · Learn</p>
          <h1>All Events</h1>
          <span>
            Discover gatherings where traditional knowledge, contemporary practice, and creative
            communities meet.
          </span>
        </div>
      </header>

      <section className="all-events-grid" aria-label="All Culturum events">
        {CULTURUM_EVENTS.map((event, index) => (
          <article className="all-events-card" key={event.id}>
            <div className="all-events-card-image">
              <img src={event.image} alt="" />
              <span className="all-events-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="all-events-badge">{event.badge}</span>
            </div>
            <div className="all-events-card-copy">
              <p>{event.category}</p>
              <h2>{event.title}</h2>
              <span>{event.tagline}</span>
            </div>
          </article>
        ))}
      </section>

      <footer className="all-events-footer">
        <a href="./#events">Back to Culturum</a>
      </footer>
    </main>
  );
}
