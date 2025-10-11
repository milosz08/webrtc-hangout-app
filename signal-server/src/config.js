'use strict';

const dotnev = require('dotenv');

dotnev.config({ path: process.env.ENV_PATH });

module.exports = {
  SIGNAL_SERVER_PORT: process.env.WHA_SIGNAL_SERVER_PORT || 3000,
  PEER_SERVER_HOST: process.env.WHA_PEER_SERVER_HOST,
  PEER_SERVER_PORT: process.env.WHA_PEER_SERVER_PORT || 443,
  PEER_SERVER_KEY: process.env.WHA_PEER_SERVER_KEY,
  STUN_SERVER_DOMAIN: process.env.WHA_STUN_SERVER_DOMAIN,
  STUN_SERVER_KEY: process.env.WHA_STUN_SERVER_KEY,
  ICE_EXPIRATION_MINUTES: process.env.WHA_ICE_EXPIRATION_MINUTES,
};
