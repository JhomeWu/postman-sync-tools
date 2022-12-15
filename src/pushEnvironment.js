
const deleteById = require('./action/deleteById')
const pushResource = require('./action/pushResource')
const file = require('./lib/file')
const log = require('./lib/log')
const state = require('./lib/state')

module.exports = async function pushEnvironment() {
    const enviroment = file.enviroment.read()

    if (!enviroment) {
        log.error('No enviroment found to push!')
        process.exit(1)
    }

    if (state.get()?.pushed_enviroment_id) {
        await deleteById(pushed_enviroment_id, 'environments')
    }
    log.info('Pushing...')

    state.set({
        pushed_enviroment_id: await pushResource(environment, 'environments')
    })
}
