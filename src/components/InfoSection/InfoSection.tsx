import Education, { EducationT } from "./Education";
import Reference, { ReferenceT } from "./Reference";
import portraitImg from "../../images/portrait.jpg";
import Section from "../Section";
import P from "../P";
import { CVContents } from "../CV";

export type ContactInfoT = {
  teleNo: { header: string; value: string };
  email: { header: string; value: string };
  linkedIn: { header: string; value: string };
  website: { header: string; value: string };
  address: { header: string; value: string };
};

type Props = CVContents["sidebar"];

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
          <Section
            hrColor="orange"
            titleWideLetterSpacing
            title={education.title}
          >
            <div className="pl-4 pt-2">
              {education.content.map((item, i) => (
                <Education education={item} key={`${item.schoolName}-${i}`} />
              ))}
            </div>
          </Section>
        </div>
        <div className="px-4 py-5">
          <Section
            hrColor="orange"
            titleWideLetterSpacing
            title={references.title}
          >
            <div className="pl-4 pt-2">
              {references.content.map((reference, i) => (
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
          <Section
            hrColor="orange"
            titleWideLetterSpacing
            title={contactInfo.title}
          >
            <div className="pl-4 pt-2">
              <div className="py-2">
                <div className="pb-2">
                  <P size="sm">{contactInfo.content.teleNo.header}:</P>
                  <P size="xs">{contactInfo.content.teleNo.value}</P>
                </div>

                <div className="pb-2">
                  <P size="sm">{contactInfo.content.email.header}:</P>
                  <P size="xs">{contactInfo.content.email.value}</P>
                </div>

                <div className="pb-2">
                  <P size="sm">{contactInfo.content.linkedIn.header}:</P>
                  <P size="xs">{contactInfo.content.linkedIn.value}</P>
                </div>

                <div className="pb-2">
                  <P size="sm">{contactInfo.content.website.header}:</P>
                  <P size="xs">
                    <a href={`https://${contactInfo.content.website.value}`}>
                      {contactInfo.content.website.value}
                    </a>
                  </P>
                </div>

                <div className="pb-2">
                  <P size="sm">{contactInfo.content.address.header}:</P>
                  <P size="xs">{contactInfo.content.address.value}</P>
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
