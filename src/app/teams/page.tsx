import type { Metadata } from "next";
import UnderDevelopmentPage from "@/components/UnderDevelopmentPage";

export const metadata: Metadata = {
  title: "Teams | Highlander Space Program",
  description: "The HSP teams page is under development. Check back soon.",
};

export default function Page() {
  return <UnderDevelopmentPage title="Teams" />;
}
