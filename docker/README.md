# WebRTC Hangout App

A simple video hangout app built with WebRTC for P2P connections. It uses a signaling server based on Express and
Socket.io to establish calls.

[GitHub repository](https://github.com/milosz08/webrtc-hangout-app)
| [Support](https://github.com/sponsors/milosz08)

## Build image

```bash
docker build -t milosz08/webrtc-hangout-app .
```

## Create container

* Using command:

```bash
docker run -d \
  --name webrtc-hangout-app \
  -p 6064:3000 \
  -e VH_APP_SERVER_PORT=3000 \
  -e VH_PEER_SERVER_HOST=<peer server host> \
  -e VH_PEER_SERVER_PORT=<peer server port, by default 443> \
  -e VH_PEER_SERVER_KEY=<peer server key> \
  -e VH_STUN_SERVER_DOMAIN=<STUN server domain> \
  -e VH_STUN_SERVER_KEY=<STUN server key> \
  -e VH_ICE_EXPIRATION_MINUTES=<session expiration minutes> \
  milosz08/webrtc-hangout-app:latest
```

* Using `docker-compose.yml` file:

```yaml
services:
  webrtc-hangout-app:
    container_name: webrtc-hangout-app
    image: milosz08/webrtc-hangout-app:latest
    ports:
      - '6064:3000'
    environment:
      VH_APP_SERVER_PORT: 3000
      # peer server
      VH_PEER_SERVER_HOST: <peer server host>
      VH_PEER_SERVER_PORT: <peer server port, by default 443>
      VH_PEER_SERVER_KEY: <peer server key>
      # stun/turn servers (with ICEs)
      VH_STUN_SERVER_DOMAIN: <STUN server domain>
      VH_STUN_SERVER_KEY: <STUN server key>
      VH_ICE_EXPIRATION_MINUTES: <session expiration minutes>
    networks:
      - webrtc-hangout-app-network

  # other containers...

networks:
  webrtc-hangout-app-network:
    driver: bridge
```

## Author

Created by Miłosz Gilga. If you have any questions about this application, send
message: [miloszgilga@gmail.com](mailto:miloszgilga@gmail.com).

## License

This project is licensed under the Apache 2.0 License.
