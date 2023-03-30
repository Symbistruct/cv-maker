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
    <Section title="Arbetserfarenhet">
      <div className="flex flex-col">
        {experiences.map((exp) => (
          <div className="flex flex-row pb-4">
            <div className="w-1/3">
              <P>
                {exp.period.started} - {exp.period.ended}
              </P>
            </div>
            <div className="w-2/3">
              <P className="pb-1">{exp.position}</P>
              <P className="pb-2">{exp.companyName}</P>
              <P>{exp.workDescription}</P>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
