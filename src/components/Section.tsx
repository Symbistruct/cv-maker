import { ReactElement } from "react";
import P from "./P";

type Props = {
  title: string;
  children: ReactElement | ReactElement[];
  className?: string;
  hrColor?: "black" | "orange" | "white";
  titleWideLetterSpacing?: boolean;
};

export default function Section({
  title,
  children,
  hrColor,
  titleWideLetterSpacing,
  className,
}: Props) {
  const getHrColor = () => {
    if (hrColor === "orange") {
      return "bg-main-orange";
    } else if (hrColor === "white") {
      return "bg-[#fcfcfc]";
    } else {
      return "bg-[#1f1f1f]";
    }
  };
  return (
    <div className={className}>
      <P
        wideLetterSpacing={titleWideLetterSpacing}
        className="mb-2"
        bold
        size="md"
      >
        {title.toUpperCase()}
      </P>
      <hr className={`border-none ${getHrColor()} h-[1px]`} />
      {children}
    </div>
  );
}
