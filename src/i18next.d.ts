/* eslint-disable @typescript-eslint/no-unused-vars */
import _ from "i18next";

import Resources from "./resources";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: Resources;
  }
}
