import { CVContents } from "../CV";
import P from "../P";
import Section from "../Section";

export type SkillT = {
  name: string;
  since: number;
};

type Props = CVContents["mainSection"]["skillsSection"];

export default function SkillsSection({
  content,
  title,
  yearsTranslation,
}: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <Section className="py-5" titleWideLetterSpacing title={title}>
      <P className="py-5 text-text-main">{content.intro}</P>
      <div className="flex justify-start py-4 flex-row flex-wrap text-text-main">
        {content.skills.map((skill, i) => (
          <div className="w-1/3 p-2" key={`${skill.name}-${i}`}>
            <div className="py-2 px-3 bg-main-orange border-b-main-orange rounded-full">
              <P size="xs" className="text-center">
                {skill.name}
              </P>
              <P size="xs" className="text-center ">
                {(currentYear - skill.since).toString()} {yearsTranslation}
              </P>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-5">
        <P className="text-text-main">
          {content.outro.map((text) => (
            <P className="pb-4 last:pb-0">{text}</P>
          ))}
        </P>
      </div>
    </Section>
  );
}
