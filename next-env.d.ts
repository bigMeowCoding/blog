declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}
declare module "*.png" {
  const content: string;
  export default content;
}
declare module "*.svg" {
  import { FC } from "react";
  import { SvgAttributes } from "csstype";
  const content: FC<SvgAttributes<SVGAElement>>;
  export default content;
}
/// <reference types="next" />
/// <reference types="next/types/global" />
