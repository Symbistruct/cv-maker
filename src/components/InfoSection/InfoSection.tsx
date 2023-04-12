import Education, { EducationT } from "./Education";
import Reference, { ReferenceT } from "./Reference";
import portraitImg from "../../images/portrait.jpg";
import Section from "../Section";
import P from "../P";

export type ContactInfoT = {
  teleNo: string;
  email: string;
  linkedIn: string;
  website: string;
  address: string;
};

type Props = {
  education: Array<EducationT>;
  references: Array<ReferenceT>;
  contactInfo: ContactInfoT;
};

export default function InfoSection({
  education,
  references,
  contactInfo,
}: Props) {
  return (
    <div id="left-sidebar" className="w-[35%]">
      <div className="h-[27.94cm] bg-light-black text-text-white text-sm">
        <img src={portraitImg} alt="Portrait" />
        <div className="px-4 pt-[2rem] pb-3 ">
          <Section hrColor="orange" titleWideLetterSpacing title="Utbildning">
            <div className="pl-4 pt-2">
              {education.map((item, i) => (
                <Education education={item} key={`${item.schoolName}-${i}`} />
              ))}
            </div>
          </Section>
        </div>
        <div className="px-4 py-5">
          <Section hrColor="orange" titleWideLetterSpacing title="Referenser">
            <div className="pl-4 pt-2">
              {references.map((reference, i) => (
                <Reference
                  reference={reference}
                  key={`${reference.name}-${i}`}
                />
              ))}
            </div>
          </Section>
        </div>
      </div>

      <div className="h-[27.94cm] bg-light-black text-text-white text-sm">
        <div className="px-4 py-[3rem]">
          <Section hrColor="orange" titleWideLetterSpacing title="Kontakt">
            <div className="pl-4 pt-2">
              <div className="py-2">
                <div className="pb-2">
                  <P size="sm">Telefon:</P>
                  <P size="xs">{contactInfo.teleNo}</P>
                </div>

                <div className="pb-2">
                  <P size="sm">Email:</P>
                  <P size="xs">{contactInfo.email}</P>
                </div>

                <div className="pb-2">
                  <P size="sm">LinkedIn:</P>
                  <P size="xs">{contactInfo.linkedIn}</P>
                </div>

                <div className="pb-2">
                  <P size="sm">Hemsida:</P>
                  <P size="xs">{contactInfo.website}</P>
                </div>

                <div className="pb-2">
                  <P size="sm">Plats:</P>
                  <P size="xs">{contactInfo.address}</P>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>

      <div className="h-[27.94cm] bg-light-black text-text-white text-sm"></div>
    </div>
  );
}
