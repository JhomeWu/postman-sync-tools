const axios = require('axios')
const env = require('../lib/env');
const log = require('../lib/log');

module.exports = async function deleteById(id, type) {
    const postmanHost = 'https://api.postman.com';
    const apiKeyParam = `?apikey=${env('POSTMAN_API_KEY', '')}`;
    log.info('Deleting existing push(s)..');
    try {
        await axios.delete(`${postmanHost}/${type}/${id}/${apiKeyParam}`);
    } catch (e) {
        log.error(`Failed to delete type ${id} to Postman Workspace.`);
     }
}