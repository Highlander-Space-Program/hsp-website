import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import InitialPageLoad from "@/components/layout/InitialPageLoad";
import { ReactQueryClientProvider } from "@/utils/react-query";

export const metadata = {
  title: "Highlander Space Program | UC Riverside Rocketry",
  description:
    "Explore UC Riverside’s Highlander Space Program, our student-built liquid rockets, engineering teams, and opportunities to get involved.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className="scroll-smooth motion-reduce:scroll-auto max-[641px]:[--spacing-section:20px] max-[641px]:[--text-body:17px] max-[641px]:[--text-heading:34px]"
    >
      <body className="bg-hsp-charcoal font-arial text-hsp-cream [&_a:focus-visible]:outline-hsp-orange [&_button:focus-visible]:outline-hsp-orange [&_a:focus-visible]:outline-[3px] [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-solid [&_a:hover]:underline [&_a:hover]:underline-offset-4 [&_button:focus-visible]:outline-[3px] [&_button:focus-visible]:outline-offset-4 [&_button:focus-visible]:outline-solid">
        <ReactQueryClientProvider>
          <InitialPageLoad />
          <div id="site-content" className="w-full min-w-0">
            <a
              className="bg-hsp-cream text-hsp-charcoal fixed top-[-100px] left-5 z-100 p-3 focus:top-3"
              href="#main-content"
            >
              Skip to content
            </a>
            <SiteHeader />
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
            <SiteFooter />
          </div>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
