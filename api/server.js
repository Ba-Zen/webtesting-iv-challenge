const express = require('express');
const server = express();
server.use(express.json());

const namesRouter = require('../names/namesRouter.js');

server.use('/api/names', namesRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'we are up and running' });
});

module.exports = server;
