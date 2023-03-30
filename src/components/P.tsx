import { ReactElement } from "react";

type Props = {
  children: string | string[] | ReactElement | ReactElement[] | undefined;
  className?: string;
};

export default function P({ children, className }: Props) {
  return <p className={className}>{children}</p>;
}
