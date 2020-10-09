// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import "egg";
import { EggAppConfig } from "egg";
import ExportConfig from "../../config/config";
type Config = ReturnType<typeof ExportConfig>;
type NewEggAppConfig = Config;
declare module "egg" {
  interface EggAppConfig extends NewEggAppConfig {}
  interface Application {
    mysql: any;
  }
}
