import { ComponentPropsWithoutRef } from "react";
import s from "./button.module.css";
import clsx from "clsx";
type Props = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
};

export function Button({ variant = "primary", fullWidth, ...props }: Props) {
  return (
    <button
      {...props}
      className={clsx(s.buttonRoot, s[variant], fullWidth && s.fullWidth)}
    />
  );
}
