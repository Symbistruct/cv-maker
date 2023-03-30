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
      <P size="sm" className="mb-1">
        {name}
      </P>
      <P size="xs">
        {jobTitle} | {companyName}
      </P>
      <P size="xs">{teleNo}</P>
      <P size="xs">{email}</P>
    </div>
  );
}
