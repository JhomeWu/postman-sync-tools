const fs = require('fs')
const path = require('path')
const log = require('./log')
const statPath = path.resolve(process.cwd(), './sync-state.json');

module.exports = {
  get: function () {
    try {
      return require(statPath);
    } catch (e) {
        return {};
    }
  },
  set: function (config) {
    const settings = Object.assign(this.get(), config);
    try {
      fs.writeFileSync(statPath, JSON.stringify(settings, null, 2));
    } catch (e) {
      log.error(`Failed to write ${statPath} config file!`);
    }
  }
}