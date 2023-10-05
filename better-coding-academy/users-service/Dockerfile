FROM node:alpine

WORKDIR /opt/app
COPY package.json /opt/app
RUN yarn
COPY . .

VOLUME ["/opt/app/node_modules"]
EXPOSE 3002

CMD yarn watch