"use client";

import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";

export default function InitialPageLoad() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) return;

    let cancelled = false;
    const content = document.getElementById("site-content");
    const previousOverflow = document.documentElement.style.overflow;
    const previousInert = content?.inert ?? false;

    // Lock the covered content only after JavaScript has started.
    document.documentElement.style.overflow = "hidden";
    if (content) {
      content.inert = true;
      content.setAttribute("aria-busy", "true");
    }

    const finish = () => {
      if (!cancelled) setLoading(false);
    };
    const timeout = window.setTimeout(finish, 8000);
    const images = Array.from(
      document.querySelectorAll<HTMLImageElement>("img[data-initial-load]"),
    );

    // Only the initial view blocks entry. Failed images also settle, and the
    // remaining photographs keep their normal lazy-loading behavior.
    void Promise.allSettled([
      ...images.map((image) => image.decode()),
      document.fonts.ready,
    ]).then(finish);

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      document.documentElement.style.overflow = previousOverflow;
      if (content) {
        content.inert = previousInert;
        content.removeAttribute("aria-busy");
      }
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <details
      open
      aria-label="Loading Highlander Space Program"
      onToggle={(event) => {
        if (!event.currentTarget.open) setLoading(false);
      }}
      className="bg-hsp-charcoal text-hsp-cream fixed inset-0 z-[200] hidden flex-col items-center justify-center p-6 open:[@media(scripting:enabled)]:flex"
    >
      {/* Native disclosure remains dismissible even before React hydrates. */}
      <summary className="border-hsp-cream/40 focus-visible:outline-hsp-orange absolute bottom-[10%] cursor-pointer list-none rounded-full border px-6 py-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-4 [&::-webkit-details-marker]:hidden">
        Continue to site
      </summary>
      <LoadingIndicator />
    </details>
  );
}
