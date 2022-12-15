const fs = require('fs')
const path = require('path')
const env = require('./env')
const log = require('./log')

module.exports = {
  collection: {
    read: () => {
      try {
        const file = env('COLLECTION_FILE', './test.postman_collection.json')
        const collection = require(path.resolve(process.cwd(), file));

        return collection
      } catch (e) {}
    },
    write: (collection) => {
      try {
        const filename = `${collection.info.name}.postman_collection.json`
        const collectionPath =  env('COLLECTION_PATH', './collections')
        const storeAt = path.join(collectionPath, filename);
        fs.writeFileSync(storeAt, JSON.stringify(collection, null, 2))
        log.success(`Postman collection written to ${storeAt}!`)
      } catch (e) {
        log.error('Failed to write Postman collection.')
      }
    }
  },
  environment: {
    read: () => {
      try {
        const file = env('ENVIRONMENT_FILE', './test.postman_environment.json')
        const environment = require(path.resolve(process.cwd(), file));
        return environment;
      } catch (e) {}
    },
    write: (environment) => {
      try {
        const filename = `${environment.name}.postman_environment.json`
        const environmentPath =  env('ENVIRONMENT_PATH', './environments')
        const storeAt = path.join(environmentPath, filename);
        fs.writeFileSync(storeAt, JSON.stringify(environment, null, 2))
        log.success(`Postman environment written to ${fistoreAtlename}!`)
      } catch (e) {
        log.error('Failed to write Postman environment.')
      }
    }
  }
}