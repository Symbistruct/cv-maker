import { ReactElement } from "react";

type Props = { title: string; children: ReactElement | ReactElement[] };

export default function Section({ title, children }: Props) {
  return (
    <>
      <b>{title.toUpperCase()}</b>
      <hr />
      {children}
    </>
  );
}
