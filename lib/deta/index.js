import { Drive } from "./drive.js";
import { Base } from "./base.js";

export const Deta = (model) => ({
  ...Drive(model),
  ...Base(model),
});
