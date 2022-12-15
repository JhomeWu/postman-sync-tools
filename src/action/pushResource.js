const axios = require('axios')
const env = require('../lib/env')
const log = require('../lib/log')

module.exports = async function pushResource(resource, type) {
    const postmanHost = 'https://api.postman.com'
    const apiKeyParam = `?apikey=${env('POSTMAN_API_KEY', '')}`
    const singular = type.slice(0, -1)
    try {
        const resourceCreated = await axios.post(`${postmanHost}/${type}/${apiKeyParam}`, { [singular]: resource })
        if (resourceCreated) {
            const resource = resourceCreated.data[singular]
            log.success(`${singular[0].toUpperCase()}${singular.slice(1)} ${resource.name} pushd to My Workspace!`)
            return resource
        }
    } catch (e) {
        log.error(`Failed to push ${singular} to My Workspace.`)
    }
}

