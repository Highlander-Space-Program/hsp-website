import { ArrowUpRight } from "lucide-react";

// SVG avoids platform-dependent emoji glyphs and scales with the link text.
export default function LinkArrow() {
  return (
    <ArrowUpRight
      aria-hidden="true"
      focusable="false"
      className="inline-block size-[0.9em] shrink-0 align-[-0.08em]"
      strokeWidth={2}
    />
  );
}
