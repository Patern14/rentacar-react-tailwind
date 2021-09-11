FROM node:14 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package.json .
COPY package-lock.json .

RUN npm install --production=true

COPY . .

RUN npm build

CMD ["node", "server.js"]