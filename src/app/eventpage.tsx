import Image from "next/image";
import Link from "next/link";
import styles from "./events.module.css";

// Fill these in after adding the actual files to public/images/events.
// Example: team: "/images/events/team.jpg"
const images = {
  logo: "",
  team: "/images/events/team.jpg",
  workshop: "/images/events/lookingout.jpg",
  mascot: "/images/events/scotty_orange.jpg",
  pattern: "",
};

// Add your real application/Linktree and sponsor URLs here.
const joinUrl = "";
const sponsorUrl = "";

type PhotoProps = {
  src: string;
  alt: string;
  contain?: boolean;
};

function Photo({ src, alt, contain = false }: PhotoProps) {
  if (!src) {
    return <div className={styles.placeholder}>{alt}</div>;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 700px) 100vw, 50vw"
      className={contain ? styles.contain : styles.cover}
    />
  );
}

export default function EventsPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo} aria-label="HSP home">
          {images.logo ? (
            <Image
              src={images.logo}
              alt="HSP"
              width={160}
              height={60}
              className={styles.logoImage}
            />
          ) : (
            <span>HSP</span>
          )}
        </Link>

        {/* Confirm these routes match your team's site. */}
        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/">HOME</Link>
          <Link href="/projects">PROJECTS</Link>
          <Link href="/teams">TEAMS</Link>
          <Link href="/events" className={styles.active} aria-current="page">
            EVENTS
          </Link>
          <Link href="/donate">DONATE</Link>
          <Link href="/contact">CONTACT US</Link>
        </nav>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="events-title">
          <div className={styles.intro}>
            <h1 id="events-title">EVENTS</h1>

            <p className={styles.description}>
              Find how to get involved with our Potential New Member Projects!
            </p>

            <div id="get-involved" className={styles.moreInfo}>
              {joinUrl ? (
                <a href={joinUrl} target="_blank" rel="noopener noreferrer">
                  More info here ↗
                  <span>Applications, projects, and Discord</span>
                </a>
              ) : (
                <p>
                  Want to get involved?
                  <span>Application and Discord links coming soon.</span>
                </p>
              )}
            </div>

            {images.mascot && (
              <div className={styles.mascot}>
                <Photo src={images.mascot} alt="" contain />
              </div>
            )}
          </div>

          <div className={styles.heroPhoto}>
            <Photo
              src={images.team}
              alt="HSP members together at a campus event"
            />
          </div>
        </section>

        <section className={styles.lowerPanels} aria-label="Life at HSP">
          <div className={styles.workshopPhoto}>
            <Photo
              src={images.workshop}
              alt="An HSP member working on a project"
            />
          </div>

          <div className={styles.pattern} aria-hidden="true">
            {images.pattern && (
              <Image
                src={images.pattern}
                alt=""
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
                className={styles.cover}
              />
            )}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <Link href="/" className={styles.footerBrand}>
          <strong>HSP</strong>
          <span>
            HIGHLANDER
            <br />
            SPACE
            <br />
            PROGRAM
          </span>
        </Link>

        <div className={styles.footerActions}>
          <a className={styles.button} href={joinUrl || "#get-involved"}>
            JOIN US
          </a>

          {sponsorUrl ? (
            <a
              className={styles.button}
              href={sponsorUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              SPONSOR
            </a>
          ) : (
            <Link className={styles.button} href="/donate">
              SPONSOR
            </Link>
          )}
        </div>

        <address className={styles.address}>
          Winston Chung Hall,
          <br />
          446 N Campus Dr,
          <br />
          Riverside, CA 92507
        </address>
      </footer>
    </div>
  );
}
