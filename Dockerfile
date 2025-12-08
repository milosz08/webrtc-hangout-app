FROM node:20-alpine AS builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
COPY client/package.json ./client/
COPY signal-server/package.json ./signal-server/

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn run build:app

FROM node:20-alpine

WORKDIR /app

COPY --chown=node:node --from=builder /usr/src/app/dist/ ./

ENV NODE_ENV=production

LABEL maintainer="Miłosz Gilga <miloszgilga@gmail.com>"

USER node

CMD ["node", "index.js"]
