FROM node:alpine

WORKDIR /opt/app
COPY ./users-service/package.json /opt/app
RUN yarn
COPY ./listings-service/* /opt/app

VOLUME ["/opt/app/node_modules"]
EXPOSE 3002

CMD yarn watch