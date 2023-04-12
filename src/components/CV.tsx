import InfoSection, { ContactInfoT } from "./InfoSection/InfoSection";
import ContentSection from "./ContentSection/ContentSection";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { ReferenceT } from "./InfoSection/Reference";
import { EducationT } from "./InfoSection/Education";
import { ExperienceT } from "./ContentSection/WorkExperienceSection";
import { SkillT } from "./ContentSection/SkillsSection";

type CVContents = {
  sidebar: {
    references: ReferenceT[];
    education: EducationT[];
    contactInfo: ContactInfoT;
  };
  mainSection: {
    aboutMe: string[];
    experiences: ExperienceT[];
    skillsSection: {
      intro: string;
      skills: SkillT[];
      outro: string[];
    };
    references: ReferenceT[];
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
