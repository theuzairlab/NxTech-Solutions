import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";
import { CompanyIntro } from "@/components/sections/company-intro";
import { OurStory } from "@/components/sections/our-story";
import { LeadershipTeam } from "@/components/sections/leadership-team";
import { OurProcess } from "@/components/sections/our-process";
import { Achievements } from "@/components/sections/achievements";
import { CompanyCulture } from "@/components/sections/company-culture";

export const metadata: Metadata = {
  title: "About Us - NxTech Solutions",
  description: "Learn about NxTech Solutions - our mission, vision, values, leadership team, process, achievements, and company culture.",
};

export default function About() {
  return (
    <div className="w-full">
      <AboutHero />
      <CompanyIntro />
      <OurStory />
      <LeadershipTeam />
      <OurProcess />
      <Achievements />
      <CompanyCulture />
    </div>
  );
}
