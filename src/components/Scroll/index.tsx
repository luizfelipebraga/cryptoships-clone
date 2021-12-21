import { ReactNode } from "react";
import { Scroll } from "./styles";

type ScrollProps = {
  children?: ReactNode;
}

export function SmoothScroll({ children }: ScrollProps) {
  return (
    <Scroll>{children}</Scroll>
  )
}
