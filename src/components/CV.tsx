import InfoSection, { ContactInfoT } from "./InfoSection/InfoSection";
import ContentSection from "./ContentSection/ContentSection";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { ReferenceT } from "./InfoSection/Reference";
import { EducationT } from "./InfoSection/Education";
import { ExperienceT } from "./ContentSection/WorkExperienceSection";
import { SkillT } from "./ContentSection/SkillsSection";

export type CVContents = {
  sidebar: {
    references: { title: string; content: ReferenceT[] };
    education: { title: string; content: EducationT[] };
    contactInfo: { title: string; content: ContactInfoT };
  };
  mainSection: {
    aboutMe: { title: string; content: string[] };
    experiences: { title: string; content: ExperienceT[] };
    skillsSection: {
      title: string;
      yearsTranslation: string;
      content: {
        intro: string;
        skills: SkillT[];
        outro: string[];
      };
    };
    references: { title: string; content: ReferenceT[] };
  };
};

export default function CV({ sidebar, mainSection }: CVContents) {
  const ref = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  return (
    <div>
      <button onClick={handlePrint}>Print out</button>
      <div
        ref={ref}
        className={`bg-main-white h-[83.82cm] w-[21.6cm] flex flex-row`}
      >
        <InfoSection
          education={sidebar.education}
          references={sidebar.references}
          contactInfo={sidebar.contactInfo}
        />
        <ContentSection
          references={mainSection.references}
          skillsSection={mainSection.skillsSection}
          aboutMe={mainSection.aboutMe}
          experiences={mainSection.experiences}
        />
      </div>
    </div>
  );
}
