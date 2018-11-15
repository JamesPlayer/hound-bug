const { environment } = require('@rails/webpacker');
const sharedConfig = require('./shared.js');

environment.config.merge(sharedConfig);

module.exports = environment;
