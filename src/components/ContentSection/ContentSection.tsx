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
        <Section className="pb-5" titleWideLetterSpacing title="Om mig">
          <P className="py-4" size="xs">
            <>
              Mitt namn är Melvin Wahlberg och jag är en utvecklare som tycker
              om att lära mig nya saker och att lösa nya utamingar. Min styrkor
              är att jag är noggrann, lättlärd och effektiv. Mina främsta
              förmågor inom programmering ligger i frontend utveckling, där jag
              i mina föregående uppdrag mest har använt mig av TypeScript och
              JavaScript.
              <br />
              <br />
              På min fritid kodar jag inte bara, utan hittar ofta nya olika
              hobbyer, men har och har alltid haft ett stort intresse för djur
              och TV-spel.
            </>
          </P>
        </Section>

        <WorkExperienceSection
          experiences={[
            {
              companyName: "Symbistruct",
              position: "Webbutvecklare",
              workDescription: "TypeScript, Tailwind, Remix, Git",
              period: {
                started: "2023",
                ended: "2023",
              },
            },
            {
              companyName: "IKEA",
              position: "Webbutvecklare",
              workDescription: "Typescript, Tailwind, React, Git",
              period: {
                started: "2022",
                ended: "2023",
              },
            },
            {
              companyName: "Symbistruct",
              position: "Webbutvecklare",
              workDescription: "HTML, CSS, JavaScript, Git",
              period: {
                started: "2021",
                ended: "2022",
              },
            },
          ]}
        />

        <SkillsSection
          skills={[
            { name: "JavaScript", since: 2018 },
            { name: "Git", since: 2018 },
            { name: "CSS", since: 2018 },
            { name: "HTML", since: 2018 },
            { name: "React", since: 2021 },
            { name: "NodeJS", since: 2021 },
            { name: "TypeScript", since: 2021 },
            { name: "Remix", since: 2022 },
          ]}
        />
      </div>
    </div>
  );

  // FIX YEARS OF EXPERIENCE TO BE MORE ACCURATE
}
