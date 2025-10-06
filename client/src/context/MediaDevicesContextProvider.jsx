'use strict';

import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const MediaDevicesContext = createContext();

export const useMediaDevicesContext = () => {
  return useContext(MediaDevicesContext);
};

const MediaDevicesContextProvider = ({ children }) => {
  const [audioDevices, setAudioDevices] = useState([]);
  const [videoDevices, setVideoDevices] = useState([]);

  return (
    <MediaDevicesContext.Provider
      value={{ audioDevices, videoDevices, setAudioDevices, setVideoDevices }}>
      {children}
    </MediaDevicesContext.Provider>
  );
};

MediaDevicesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MediaDevicesContextProvider;
