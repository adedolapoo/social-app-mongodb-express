const AppServer = require('../app');
const config = require('./config');

const appServer = new AppServer();

appServer.start(config.app.port)