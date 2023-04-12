import P from "../P";
import Section from "../Section";
import Banner from "./Banner";
import SkillsSection, { SkillT } from "./SkillsSection";
import WorkExperienceSection, { ExperienceT } from "./WorkExperienceSection";
import signatureImg from "../../images/signature.png";
import Page from "./Page";
import ReferencesSection from "./ReferencesSection";
import { ReferenceT } from "../InfoSection/Reference";

type Props = {
  aboutMe: string[];
  experiences: ExperienceT[];
  skillsSection: { intro: string; skills: SkillT[]; outro: string[] };
  references: ReferenceT[];
};

export default function ContentSection({
  aboutMe,
  experiences,
  skillsSection,
  references,
}: Props) {
  return (
    <div className="w-[65%] bg-main-white text-black text-sm">
      <Banner title="Melvin Wahlberg" secondTitle="Webbutvecklare" />
      <Page size="23.65">
        <Section className="pb-10" titleWideLetterSpacing title="Om mig">
          {aboutMe.map((text) => (
            <P className="pt-5 text-text-main">{text}</P>
          ))}
        </Section>

        <WorkExperienceSection experiences={experiences} />
      </Page>

      <Page>
        <SkillsSection
          intro={skillsSection.intro}
          skills={skillsSection.skills}
          outro={skillsSection.outro}
        />
      </Page>

      <Page>
        <ReferencesSection references={references} />
        <div className="pt-[5rem]">
          <img className="w-1/2" src={signatureImg} />
        </div>
      </Page>
    </div>
  );
}
