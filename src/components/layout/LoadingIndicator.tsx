export default function LoadingIndicator() {
  return (
    <div role="status" className="flex flex-col items-center gap-6 text-center">
      <span
        aria-hidden="true"
        className="border-hsp-cream/20 border-t-hsp-orange size-16 rounded-full border-4 motion-safe:animate-spin"
      />
      <p className="text-4xl font-bold tracking-[-0.06em]">HSP</p>
      <p className="text-lg">Preparing for launch…</p>
      <span className="sr-only">Loading the page.</span>
    </div>
  );
}
