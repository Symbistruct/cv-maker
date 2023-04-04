import P from "../P";
import Section from "../Section";
import Banner from "./Banner";
import SkillsSection from "./SkillsSection";
import WorkExperienceSection from "./WorkExperienceSection";

export default function ContentSection() {
  return (
    <div className="w-[65%] h-full bg-[#f2f2f2] text-black text-sm">
      <Banner title="Melvin Wahlberg" secondTitle="Webbutvecklare" />
      <div className="w-full py-[2rem] px-[2.75rem] h-[23.65cm]">
        <Section className="pb-5" titleWideLetterSpacing title="Om mig">
          <P className="py-5">
            <>
              Mitt namn är Melvin Wahlberg och jag är en utvecklare som tycker
              om att lära mig nya saker och att lösa nya utamingar. Mina styrkor
              är att jag är noggrann, lättlärd och effektiv.
              <br />
              <br />
              Här kan mina föregående uppdrag finnas, jag hoppas ni gillar det
              ni ser! För ytterliggare information se gärna min hemsida, eller
              hör av dig till min mail vid några frågor.
            </>
          </P>
        </Section>

        <WorkExperienceSection
          experiences={[
            {
              companyName: "Symbistruct",
              position: "Webbutvecklare",
              workDescription:
                "Utvecklade en bokningsapp i JavaScript ramverket Remix. Själva appen kan finnas på min hemsida vid projektet 'Bokahundtrim'. Viktigt i detta uppdrag: TypeScript, Tailwind, Remix, Git.",
              period: {
                started: "2023",
                ended: "2023",
              },
            },
            {
              companyName: "IKEA",
              position: "Webbutvecklare",
              workDescription:
                "Utvecklade en intern applikation för IKEA som skulle underlätta med att beställa bilder, möbler och andra resurser. Appen skrevs i React. Viktigt i detta uppdrag: Typescript, Tailwind, React, Git.",
              period: {
                started: "2022",
                ended: "2023",
              },
            },
            {
              companyName: "SKFM Syd",
              position: "Kundtjänst",
              workDescription:
                "Satt i kundtjänst och hjälpte till med fakturering m.m.",
              period: {
                started: "2020",
                ended: "2022",
              },
            },
            {
              companyName: "Symbistruct",
              position: "Webbutvecklare",
              workDescription:
                "Gjorde mindre webbutvecklings-uppgifter i en hemsida skriven i Ruby on Rails. Viktigt i detta uppdrag: HTML, CSS, JavaScript, Git, Ruby on Rails.",
              period: {
                started: "2021",
                ended: "2022",
              },
            },
          ]}
        />
      </div>
      <div className="w-full py-[1rem] px-[2.75rem] h-[27.94cm]">
        <SkillsSection
          intro="Under åren har jag arbetat med många olika tekniker, ramverk och programmeringsspråk för att lyckas lösa alla problem som jag har stött på. Nedan finns några av de främsta som jag har arbetat med och ungefär hur länge jag har använt dem."
          skills={[
            { name: "JavaScript", since: 2018 },
            { name: "Git", since: 2018 },
            { name: "CSS", since: 2018 },
            { name: "HTML", since: 2018 },
            { name: "HTML5", since: 2018 },
            { name: "NodeJS", since: 2020 },
            { name: "Bootstrap", since: 2020 },
            { name: "React", since: 2021 },
            { name: "TypeScript", since: 2021 },
            { name: "SCSS", since: 2021 },
            { name: "Tailwind", since: 2021 },
            { name: "Remix", since: 2022 },
          ]}
        />
        <div>
          <P>
            <>
              Som sagt innan gillar jag att lära mig nya saker, och drar mig
              inte ifrån att lära mig nya tekniker om det krävs för att lösa
              vissa problem, eller bara för att jag själv tycker om utmaningen
              att lära mig något nytt.
              <br />
              <br />
              Har du fler frågor angående mina förra uppdrag, eller vill du bara
              veta mer om mig som person? Hör gärna av dig isåfall så kan vi
              prata vidare!
            </>
          </P>
        </div>
      </div>
    </div>
  );
}
