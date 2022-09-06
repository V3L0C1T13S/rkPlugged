const { pluginClass, usingRikka } = require("./lib");
// keep manifest on rikka
require("./manifest.json");

class rkPlugged extends pluginClass {
  startPlugin() {
    this.inject();
  }

  inject() {
    console.log(`Hello, I'm a multifarious plugin running on ${usingRikka ? "Rikka" : "Replugged"}`);
  }
}

if (usingRikka) {
  module.exports = {
    default: rkPlugged,
  };
} else {
  module.exports = rkPlugged;
}
