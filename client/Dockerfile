FROM tiangolo/node-frontend:10 as build-stage
WORKDIR /client
COPY package*.json /client/
COPY ./yarn.lock /client/
RUN yarn install
COPY ./ /client/
RUN yarn run build
# Stage 1, based on Nginx, to have only the compiled client, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /client/build/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
