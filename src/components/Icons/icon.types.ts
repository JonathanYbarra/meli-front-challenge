import { HTMLAttributes } from "react";
import { IconProps as Icon } from "../../common/types";
import Icons from "./icons";

export type Name = keyof typeof Icons;

export type IconProps = {
  name: Name;
} & Icon &
  HTMLAttributes<HTMLOrSVGElement>;
