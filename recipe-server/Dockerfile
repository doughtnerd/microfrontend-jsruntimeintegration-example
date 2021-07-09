FROM node:latest AS base

RUN apt-get update && apt-get install -y netcat

WORKDIR /usr/src/

FROM base AS dependencies
COPY package.json .
RUN npm install --prefer-offline --no-audit

FROM dependencies AS dev
COPY . .

FROM dev AS build
RUN npm run build

FROM node:alpine AS production
COPY --from=build /usr/src/package*.json ./
RUN npm install --only=prod --prefer-offline --no-audit
COPY --from=build /usr/src/dist ./
CMD ["node", "index.js"]