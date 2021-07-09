FROM node:alpine AS base

WORKDIR /usr/src

COPY package.json .
COPY yarn.lock .
RUN yarn install

RUN yarn build:webpack --mode=production