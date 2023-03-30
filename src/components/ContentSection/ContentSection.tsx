import P from "../P";
import Section from "../Section";
import Banner from "./Banner";
import SkillsSection from "./SkillsSection";
import WorkExperienceSection from "./WorkExperienceSection";

export default function ContentSection() {
  return (
    <div className="w-[65%] h-full bg-[#f2f2f2] text-black text-sm">
      <Banner title="Melvin Wahlberg" secondTitle="Webbutvecklare" />
      <div className="w-full p-5">
        <Section title="Om mig">
          <P>
            Mitt namn är Melvin Wahlberg och jag är en utvecklare som primärt
            arbetar med JavaScript och TypeScript.
          </P>
        </Section>

        <WorkExperienceSection
          experiences={[
            {
              companyName: "Symbistruct",
              position: "Webbutvecklare",
              workDescription:
                "Under detta uppdrag jobbade jag mest med TypeScript och Tailwind i ramverket Remix. Git användes för versionskontroll.",
              period: {
                started: "2023",
                ended: "2023",
              },
            },
            {
              companyName: "IKEA",
              position: "Webbutvecklare",
              workDescription:
                "Detta uppdraget använde sig mest av Typescript och Tailwind i ramverket React. Git användes för versionskontroll.",
              period: {
                started: "2022",
                ended: "2023",
              },
            },
            {
              companyName: "BS Gruppen",
              position: "Kundtjänst",
              workDescription:
                "Jobbade i kundtjänst och hjälpte till med fakturering m.m.",
              period: {
                started: "2021",
                ended: "2022",
              },
            },
            {
              companyName: "Symbistruct",
              position: "Webbutvecklare",
              workDescription:
                "Arbetade med HTML, CSS och JavaScript. Git användes för versionskontroll.",
              period: {
                started: "2021",
                ended: "2022",
              },
            },
          ]}
        />

        <SkillsSection
          skills={[
            { name: "React", since: 2018 },
            { name: "JavaScript", since: 2016 },
            { name: "NodeJS", since: 2018 },
            { name: "TypeScript", since: 2019 },
            { name: "Remix", since: 2022 },
          ]}
        />
      </div>
    </div>
  );

  // FIX YEARS OF EXPERIENCE TO BE MORE ACCURATE
}
