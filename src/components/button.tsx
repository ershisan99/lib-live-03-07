import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"button">;

export function Button(props: Props) {
  console.log("button");
  return <button {...props}>Hello World</button>;
}
