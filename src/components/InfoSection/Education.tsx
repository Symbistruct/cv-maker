import P from "../P";

export type EducationT = {
  schoolName: string;
  date: { from: string; to: string };
};

type Props = {
  education: EducationT;
};

export default function Education({ education }: Props) {
  const { schoolName, date } = education;

  return (
    <div className="py-2">
      <P>{schoolName}</P>
      <P>
        {date.from} - {date.to}
      </P>
    </div>
  );
}
