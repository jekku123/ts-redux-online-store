# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine AS base
ARG REACT_APP_STORE_API_URL
ENV REACT_APP_STORE_API_URL $REACT_APP_STORE_API_URL
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
COPY public /usr/src/app/public
COPY src /usr/src/app/src
COPY tsconfig.json /usr/src/app/tsconfig.json
EXPOSE 3000
RUN npm run build

FROM node:${NODE_VERSION}-alpine AS production
WORKDIR /usr/src/app
COPY --from=base /usr/src/app/build /usr/src/app/build
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]
