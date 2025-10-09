'use strict';

import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { Peer } from 'peerjs';
import PropTypes from 'prop-types';

const PeerContext = createContext(null);

export const usePeer = () => {
  return useContext(PeerContext);
};

const PeerProvider = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [peer, setPeer] = useState(null);

  const createPeerConnection = (afterConnectCallback, afterError) => {
    fetchPeerServerConnectionDetails().then(connDetails => {
      if (!connDetails || connDetails.config.iceServers.length === 0) {
        afterError();
      } else {
        const peer = new Peer(undefined, connDetails);
        peer.on('open', id => {
          afterConnectCallback(id);
          setPeer(peer);
        });
      }
    });
  };

  const fetchPeerServerConnectionDetails = async () => {
    try {
      const { data } = await axios.get('/api/v1/peer');
      return data;
    } catch (error) {
      enqueueSnackbar('Unable to fetch connection details');
      return null;
    }
  };

  return (
    <PeerContext.Provider value={{ peer, createPeerConnection }}>
      {children}
    </PeerContext.Provider>
  );
};

PeerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PeerProvider;
