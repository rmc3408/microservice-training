FROM node:alpine

WORKDIR /opt/app
COPY package.json .
RUN yarn
COPY . .

VOLUME ["/opt/app/node_modules"]

CMD yarn watch