export type Color =
  | "transparent"
  | "primary"
  | "primary-contrast"
  | "primary-light"
  | "secondary"
  | "secondary-contrast"
  | "secondary-light"
  | "secondary-dark"
  | "black"
  | "white"
  | "success"
  | "error"
  | "info"
  | "warning"
  | "gray-light"
  | "gray-dark"
  | "gray-100"
  | "gray-200"
  | "gray-300"
  | "gray-400"
  | "gray-500"
  | "gray-600"
  | "gray-800"
  | "gray-900"
  | "green"
  | "light-green"
  | "dark-green"
  | "yellow"
  | "blue"
  | "violet"
  | "purple"
  | "teal";

export type IconProps = {
  stroke?: Color;
  fill?: Color;
  className?: string;
};
