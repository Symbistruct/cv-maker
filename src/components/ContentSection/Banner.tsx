import P from "../P";

export default function Banner({
  title,
  secondTitle,
}: {
  title: string;
  secondTitle: string;
}) {
  return (
    <div className="w-full h-[7rem] mt-[2rem] bg-[#fecb03] p-[2rem]">
      <P>{title}</P>
      <P>{secondTitle}</P>
    </div>
  );
}
