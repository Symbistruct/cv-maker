import { ReactElement } from "react";

type Props = {
  children: string | string[] | ReactElement | ReactElement[] | undefined;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  wideLetterSpacing?: boolean;
  bold?: boolean;
};

export default function P({
  children,
  className,
  size,
  bold,
  wideLetterSpacing,
}: Props) {
  const getTextSize = () => {
    switch (size) {
      case "xs":
        return "text-xs";
      case "sm":
        return "text-sm";
      case "md":
        return "text-base";
      case "lg":
        return "text-lg";
      case "xl":
        return "text-xl";
      case "2xl":
        return "text-2xl";
    }
  };

  if (bold) {
    return (
      <p
        className={`${getTextSize()} ${
          wideLetterSpacing ? "tracking-widest" : ""
        } ${className ?? ""}`}
      >
        <b>{children}</b>
      </p>
    );
  }
  return (
    <p
      className={`${getTextSize()} ${
        wideLetterSpacing ? "tracking-widest" : ""
      } ${className ?? ""}`}
    >
      {children}
    </p>
  );
}
