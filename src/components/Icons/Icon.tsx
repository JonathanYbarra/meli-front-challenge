import { ReactElement } from "react";

import Icons from "./icons";
import { IconProps } from "./icon.types";

export const Icon = (props: IconProps): ReactElement => {
  const { name, fill, stroke } = props;
  const SvgFC = Icons[name];

  return <SvgFC fill={fill} stroke={stroke} {...props} />;
};
