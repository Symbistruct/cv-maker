import P from "../P";
import Section from "../Section";

type Skill = {
  name: string;
  since: number;
};

type Props = {
  skills: Array<Skill>;
};

export default function SkillsSection({ skills }: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <Section
      className="pb-5"
      titleWideLetterSpacing
      title="Kunskaper och färdigheter"
    >
      <div className="flex py-4 flex-row flex-wrap">
        {skills.map((skill, i) => (
          <div className="w-1/3 p-2" key={`${skill.name}-${i}`}>
            <P size="xs" className="text-center">
              {skill.name}
            </P>
            <P size="sm" className="text-center">
              {(currentYear - skill.since).toString()} år
            </P>
          </div>
        ))}
      </div>
    </Section>
  );
}
