import Image from "next/image";
import styles from "./events.module.css";
//import { title } from "process";

type EventItem = {
  title: string;
  date: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  link?: string;
  linkLabel?: string;
};

//change url's
const discordUrl = "something";
//const applicationUrl = "something";
//const donationUrl = "something";
//const otherUrl = "something";

//for events (what specific events are happening)
//add more based follow up
const events: EventItem[] = [
  {
    title: "",
    date: "",
    image: "",
    link: "",
    linkLabel: "",
  },

  {
    title: "MORE EVENTS",
    date: "DEATILS COMING SOON",
    description: "Check back soon for more events and updates!",
  },
];

function EventCard({ event }: { event: EventItem }) {
  return (
    <article className={styles.card}>
      <h3>{event.title}</h3>

      <p className={styles.date}>{event.date}</p>

      {event.link ? (
        <a
          className={styles.eventLink}
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {event.linkLabel} <span aria-hidden="true">↗</span>
        </a>
      ) : event.linkLabel ? (
        <p className={styles.pendingLink}>Link coming soon</p>
      ) : null}

      {event.description && (
        <p className={styles.description}>{event.description}</p>
      )}

      {event.image && (
        <div className={styles.cardImage}>
          <Image
            src={event.image}
            alt={event.imageAlt ?? event.title}
            fill
            sizes="(max-width: 700px) 100vw, 33vw"
            className={styles.photo}
          />
        </div>
      )}
    </article>
  );
}

export default function EventsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.heading}>
        <h1>
          EVENTS <span aria-hidden="true">↗</span>
        </h1>
      </header>

      <section className={styles.outreach} aria-labelledby="outreach-heading">
        <div className={styles.rocketPhoto}>
          <Image
            src="/images/events/rocket.jpg"
            alt="HSP rocket hardware"
            fill
            sizes="(max-width: 700px) 50vw, 15vw"
            className={styles.photo}
          />
        </div>

        <div className={`${styles.panel} ${styles.outreachTitle}`}>
          <h2 id="outreach-heading">OUTREACH</h2>
        </div>

        <div className={styles.teamPhoto}>
          <Image
            src="/images/events/team.jpg"
            alt="HSP members at an outreach booth"
            fill
            sizes="(max-width: 700px) 100vw, 30vw"
            className={styles.photo}
          />
        </div>

        <div className={`${styles.panel} ${styles.mission}`}>
          <p>
            HSP is committed to inspiring the next generation of scientists and
            engineers through community outreach.
          </p>
        </div>

        <div className={styles.mascot}>
          <Image
            src="/images/events/mascot.png"
            alt=""
            fill
            sizes="(max-width: 700px) 50vw, 15vw"
            className={styles.mascotImage}
          />
        </div>

        <div className={styles.meetingPhoto}>
          <Image
            src="/images/events/meeting.jpg"
            alt="Students attending an HSP presentation"
            fill
            sizes="(max-width: 700px) 50vw, 30vw"
            className={styles.photo}
          />
        </div>

        <div className={`${styles.panel} ${styles.invitation}`}>
          <p>Catch us at our next tabling event!</p>
          <a href="#upcoming-events">
            Explore events <span aria-hidden="true">↘</span>
          </a>
        </div>

        <div className={styles.tablingPhoto}>
          <Image
            src="/images/events/tabling.jpg"
            alt="HSP members sharing their projects with students"
            fill
            sizes="(max-width: 700px) 50vw, 30vw"
            className={styles.photo}
          />
        </div>
      </section>

      <section
        id="upcoming-events"
        className={styles.upcoming}
        aria-labelledby="upcoming-heading"
      >
        <h2 id="upcoming-heading">UPCOMING EVENTS</h2>

        <div className={styles.eventGrid}>
          {events.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>

        <div className={styles.discord}>
          {discordUrl ? (
            <a href={discordUrl} target="_blank" rel="noopener noreferrer">
              Latest updates on our Discord!
              <span aria-hidden="true"> ↗</span>
            </a>
          ) : (
            <p>Latest updates on our Discord! Invite link coming soon.</p>
          )}
        </div>
      </section>
    </main>
  );
}