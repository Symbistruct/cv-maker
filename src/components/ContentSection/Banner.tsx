import P from "../P";

export default function Banner({
  title,
  secondTitle,
}: {
  title: string;
  secondTitle: string;
}) {
  return (
    <div className="w-full h-[3.5cm] mt-[0.75cm] text-orange-tint-black bg-main-orange p-[1.1cm]">
      <P size="2xl" wideLetterSpacing bold>
        {title.toUpperCase()}
      </P>
      <P wideLetterSpacing>{secondTitle.toUpperCase()}</P>
    </div>
  );
}
