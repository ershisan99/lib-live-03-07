import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"button">;

export function Button(props: Props) {
  return <button {...props}>Hello World</button>;
}
