'use strict';

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const expressServer = express();
const httpServer = http.createServer(expressServer);

const io = new Server(httpServer);

expressServer.use(express.json());
expressServer.use(express.urlencoded({ extended: true }));

module.exports = {
  io,
  httpServer,
  expressServer,
};
