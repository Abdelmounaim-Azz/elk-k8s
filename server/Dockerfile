FROM node:alpine

WORKDIR /server
COPY package.json .
COPY yarn.lock .
RUN  yarn install 
COPY . .

CMD ["yarn","run","start"]