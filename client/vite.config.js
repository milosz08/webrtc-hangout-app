'use strict';

import react from '@vitejs/plugin-react';
import process from 'node:process';
import { defineConfig, loadEnv } from 'vite';

/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd() + '/..', '');
  return {
    plugins: [react()],
    build: {
      outDir: '../dist/client',
    },
    server: {
      port: Number(env.VH_VITE_SERVER_PORT),
      proxy: {
        '/api': {
          target: `http://localhost:${env.VH_SIGNAL_SERVER_PORT}`,
          changeOrigin: true,
        },
        '/socket.io': {
          target: `http://localhost:${env.VH_SIGNAL_SERVER_PORT}`,
          ws: true,
        },
      },
    },
  };
});
