const express = require('express');

const apiRouter = require('./api-router.js');
const configureMiddleWare = require('./configureMiddleWare.js');
const server = express();
const bcrypt = require('bcryptjs');

configureMiddleWare(server);
server.use('/api', apiRouter);

module.exports = server;
