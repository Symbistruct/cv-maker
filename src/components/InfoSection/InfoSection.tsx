import Education, { EducationT } from "./Education";
import Reference, { ReferenceT } from "./Reference";
import portraitImg from "../../images/portrait.jpg";
import Section from "../Section";
import P from "../P";

type Props = {
  education: Array<EducationT>;
  references: Array<ReferenceT>;
  contactInfo: {
    teleNo: string;
    email: string;
    linkedIn: string;
    website: string;
    address: string;
  };
};

export default function InfoSection({
  education,
  references,
  contactInfo,
}: Props) {
  return (
    <div
      id="left-sidebar"
      className="w-[35%] h-full bg-[#212027] text-white text-sm"
    >
      <img src={portraitImg} alt="Portrait" />
      <div className="p-3">
        <Section title="Utbildning">
          {education.map((item) => (
            <Education education={item} />
          ))}
        </Section>
      </div>
      <div className="p-3">
        <Section title="Referenser">
          {references.map((reference) => (
            <Reference reference={reference} />
          ))}
        </Section>
      </div>

      <div className="p-3">
        <Section title="Kontakt">
          <div className="py-2">
            <P>Telefon:</P>
            <P>{contactInfo.teleNo}</P>

            <P>Email:</P>
            <P>{contactInfo.email}</P>

            <P>LinkedIn:</P>
            <P>{contactInfo.linkedIn}</P>

            <P>Hemsida:</P>
            <P>{contactInfo.website}</P>

            <P>Plats:</P>
            <P>{contactInfo.address}</P>
          </div>
        </Section>
      </div>
    </div>
  );
}
