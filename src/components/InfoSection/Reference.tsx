import P from "../P";

export type ReferenceT = {
  name: string;
  jobTitle: string;
  companyName: string;
  teleNo?: string;
  email?: string;
  quote?: string;
};

type Props = {
  reference: ReferenceT;
};

export default function Reference({ reference }: Props) {
  const { name, jobTitle, teleNo, email, companyName, quote } = reference;
  return (
    <div className="py-3">
      <P size="sm" className="mb-0">
        {name}
      </P>
      <P size="xs" className="mb-2">
        {jobTitle} | {companyName}
      </P>
      {quote ? (
        <>
          <P size="xs" className="mb-2 italic">
            "{quote}"
          </P>
        </>
      ) : (
        <></>
      )}
      <P size="xs">{email}</P>
      <P size="xs">{teleNo}</P>
    </div>
  );
}
