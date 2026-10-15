import LoadingIndicator from "@/components/layout/LoadingIndicator";

export default function Loading() {
  return (
    <div className="flex min-h-[65svh] items-center justify-center px-6 py-20">
      <LoadingIndicator />
    </div>
  );
}
