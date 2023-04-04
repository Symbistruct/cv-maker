import P from "../P";
import Section from "../Section";

type Skill = {
  name: string;
  since: number;
};

type Props = {
  skills: Array<Skill>;
  intro: string;
};

export default function SkillsSection({ skills, intro }: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <Section
      className="py-5"
      titleWideLetterSpacing
      title="Kunskaper och färdigheter"
    >
      <P className="py-5">{intro}</P>
      <div className="flex py-4 px-5 flex-row flex-wrap">
        {skills.map((skill, i) => (
          <div className="w-1/2 p-2" key={`${skill.name}-${i}`}>
            <div className="py-2 px-3">
              <P
                size="xs"
                className="text-center rounded-t-md py-2 bg-[#fecb03]"
              >
                {skill.name}
              </P>
              <P
                size="sm"
                className="text-white rounded-b-md py-2 bg-[#212027] text-center"
              >
                {(currentYear - skill.since).toString()} år
              </P>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
