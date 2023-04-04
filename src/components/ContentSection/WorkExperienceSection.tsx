import P from "../P";
import Section from "../Section";

export type ExperienceT = {
  companyName: string;
  position: string;
  workDescription: string;
  period: {
    started: string;
    ended: string;
  };
};

type Props = {
  experiences: Array<ExperienceT>;
};

export default function WorkExperienceSection({ experiences }: Props) {
  return (
    <Section className="pb-4" titleWideLetterSpacing title="Arbetserfarenhet">
      <div className="flex flex-col py-4">
        {experiences.map((exp, i) => (
          <div className="flex flex-row py-3" key={`${exp.companyName}-${i}`}>
            <div className="w-1/3">
              <P size="xs">
                {exp.period.started} - {exp.period.ended}
              </P>
            </div>
            <div className="w-2/3">
              <P size="xs" bold>
                {exp.position.toUpperCase()}
              </P>
              <P className="pb-3" size="xs">
                {exp.companyName}
              </P>
              <P size="xs">{exp.workDescription}</P>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
