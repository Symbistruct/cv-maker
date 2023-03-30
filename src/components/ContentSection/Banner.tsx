import P from "../P";

export default function Banner({
  title,
  secondTitle,
}: {
  title: string;
  secondTitle: string;
}) {
  return (
    <div className="w-full h-[7rem] mt-5 bg-[#fecb03] p-[2rem]">
      <P size="2xl" wideLetterSpacing bold>
        {title.toUpperCase()}
      </P>
      <P wideLetterSpacing>{secondTitle.toUpperCase()}</P>
    </div>
  );
}
