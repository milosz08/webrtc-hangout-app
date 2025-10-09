'use strict';

const axios = require('axios');
const config = require('../config');
const logger = require('../logger');

module.exports = {
  handleGetPeerServerConnectionDetails: async ({ res }) => {
    let iceServers = [];
    try {
      const { data: servers } = await axios.get(
        `https://${config.STUN_SERVER_DOMAIN}/api/v1/turn/credentials`,
        {
          params: {
            apiKey: config.STUN_SERVER_KEY,
          },
        }
      );
      iceServers = servers;
    } catch (error) {
      logger.error(`Unable to fetch ICE servers. Cause: ${error.message}`);
    }
    res.json({
      host: config.PEER_SERVER_HOST,
      port: config.PEER_SERVER_PORT,
      path: '/peerjs',
      config: {
        iceServers,
      },
      key: config.PEER_SERVER_KEY,
    });
  },
};
