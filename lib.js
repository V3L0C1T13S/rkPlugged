/* eslint-disable no-console */
const { join } = require("path");
const rikkaPath = require("./rkPath");

/**
 * Tries to require all modules in an array, throws error if
 * none succeeded.
 * @param {Array<string>} modules Modules to try for
 * @returns The module that was required
 */
const requireTillSuccess = (modules) => {
  let module;

  modules.forEach((m) => {
    if (module) return;

    try {
      const mod = require(m);
      module = mod;
    } catch {
      console.log(`${m} null, moving to next`);
    }
  });

  if (!module) throw new Error("All module requires failed.");

  return module;
};

// Rikka goes first since the user might have Replugged compat enabled
const { Plugin, RikkaPlugin } = requireTillSuccess([
  `${rikkaPath}/Common/entities`,
  "powercord/entities",
]);

const pluginClass = Plugin ?? RikkaPlugin;

const usingRikka = $rk !== undefined && !powercord;

module.exports = {
  pluginClass,
  requireTillSuccess,
  usingRikka,
};
