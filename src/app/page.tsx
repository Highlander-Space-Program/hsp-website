import HomeHero from "@/components/home/HomeHero";
import HomeAbout from "@/components/home/HomeAbout";
import HomeFundraiser from "@/components/home/HomeFundraiser";
import HomeProjects from "@/components/home/HomeProjects";
import HomeTeams from "@/components/home/HomeTeams";
import HomeOutreach from "@/components/home/HomeOutreach";
import HomeEvents from "@/components/home/HomeEvents";
import HomeSponsors from "@/components/home/HomeSponsors";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeFundraiser />
      <HomeProjects />
      <HomeTeams />
      <HomeOutreach />
      <HomeEvents />
      <HomeSponsors />
    </>
  );
}
