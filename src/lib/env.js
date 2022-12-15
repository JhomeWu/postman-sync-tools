require('dotenv').config()

module.exports = function env(name, defaultVal = '') {
    return process.env?.[name] ?? defaultVal;
}