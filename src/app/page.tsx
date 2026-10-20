import type { Metadata } from "next";
import EventsPage from "./eventpage";

export const metadata: Metadata = {
  title: "Events | Highlander Space Program",
  description:
    "Explore Highlander Space Program outreach, recruitment, and upcoming events.",
};

export default function Page() {
  return <EventsPage />;
}
