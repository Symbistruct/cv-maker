import { CVContents } from "../CV";
import { ReferenceT } from "../InfoSection/Reference";
import P from "../P";
import Section from "../Section";

type Props = { references: CVContents["mainSection"]["references"] };

export default function ReferencesSection({ references }: Props) {
  return (
    <Section className="py-5" titleWideLetterSpacing title={references.title}>
      {references.content.map((reference) => (
        <div className="py-3">
          <P bold size="md">
            {reference.name}
          </P>
          <P>
            {reference.jobTitle} | {reference.companyName}
          </P>
          <P className="italic py-4">
            <>"{reference.quote}"</>
          </P>
        </div>
      ))}
    </Section>
  );
}
