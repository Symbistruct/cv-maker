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
    <Section title="Kunskaper och färdigheter">
      <div className="flex flex-row flex-wrap">
        {skills.map((skill) => (
          <div className="w-1/2">
            <P>{skill.name}</P>
            <P>{(currentYear - skill.since).toString()} år</P>
          </div>
        ))}
      </div>
    </Section>
  );
}
