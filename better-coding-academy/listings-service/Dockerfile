FROM node:alpine

WORKDIR /opt/app
COPY ./listings-service/package.json /opt/app
RUN yarn
COPY ./listings-service/* /opt/app

VOLUME ["/opt/app/node_modules"]
EXPOSE 3001

CMD yarn watch