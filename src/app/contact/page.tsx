import type { Metadata } from "next";
import UnderDevelopmentPage from "@/components/UnderDevelopmentPage";

export const metadata: Metadata = {
  title: "Contact us | Highlander Space Program",
  description: "The HSP contact us page is under development. Check back soon.",
};

export default function Page() {
  return <UnderDevelopmentPage title="Contact us" />;
}
