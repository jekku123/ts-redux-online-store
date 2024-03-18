# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine AS base
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
COPY . .
EXPOSE 3000
RUN npm run build

FROM base AS production
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]
