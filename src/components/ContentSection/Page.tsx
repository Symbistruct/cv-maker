import { ReactElement } from "react";

type Props = {
  size?: string;
  children?: ReactElement | ReactElement[];
};

export default function Page({ size, children }: Props) {
  return (
    <div
      className={`w-full py-[2rem] px-[2.75rem] h-[${
        size ? `${size}cm` : "27.94cm"
      }]`}
    >
      {children}
    </div>
  );
}
