import P from "../P";

export type ReferenceT = {
  name: string;
  jobTitle: string;
  companyName: string;
  teleNo: string;
  email?: string;
};

type Props = {
  reference: ReferenceT;
};

export default function Reference({ reference }: Props) {
  const { name, jobTitle, teleNo, email, companyName } = reference;
  return (
    <div className="py-2">
      <P>{name}</P>
      <P>
        {jobTitle} | {companyName}
      </P>
      <P>{teleNo}</P>
      <P>{email}</P>
    </div>
  );
}
