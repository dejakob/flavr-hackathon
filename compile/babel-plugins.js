const getbabelRelayPlugin = require('babel-relay-plugin');
const schema = require('../node_modules/flavr-hackathon-server/output/schema.json');

console.log('schema', schema);

module.exports = getbabelRelayPlugin(schema.data);