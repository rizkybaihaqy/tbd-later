import { Drive } from "./drive.js";
import { Base } from "./base.js";

/**
 * @template T
 * @param {Object} model
 * @param {string} model.name
 * @param {T} model.property
 */
export const Deta = (model) => {
  return {
    ...Drive(model),
    ...Base(model),
  };
};
