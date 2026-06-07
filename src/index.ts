import { noTopLevelSideEffects } from "./rules/no-top-level-side-effects.ts";
import { noTopLevelState } from "./rules/no-top-level-state.ts";
import { noTopLevelVariables } from "./rules/no-top-level-variables.ts";

export const rules = {
  "no-top-level-side-effects": noTopLevelSideEffects,
  "no-top-level-state": noTopLevelState,
  "no-top-level-variables": noTopLevelVariables,
};

export default { rules };
