FROM node:alpine as build-stage
WORKDIR /client
COPY package*.json /client/
COPY ./yarn.lock /client/
RUN yarn install
COPY ./ /client/
CMD ["yarn","run","dev"]


