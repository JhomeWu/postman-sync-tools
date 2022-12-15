
const deleteById = require('./action/deleteById')
const pushResource = require('./action/pushResource')
const file = require('./lib/file')
const log = require('./lib/log')
const state = require('./lib/state')

module.exports = async function pushCollection() {
    const collection = file.collection.read()
    if (!collection) {
        log.error('No collection found to push!')
        process.exit(1)
    }

    if (state.get()?.pushed_collection_id) {
        await deleteById(pushed_collection_id, 'collections')
    }

    log.info('Pushing...')
    state.set({
        pushed_collection_id: await pushResource(collection, 'collections')
    })
}

