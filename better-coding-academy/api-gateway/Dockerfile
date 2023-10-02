FROM node:14

WORKDIR /opt/app

COPY ./users-service/package.json .
RUN yarn
COPY ./users-service/* .

VOLUME [ "/opt/app/node_modules" ]
EXPOSE 3000

CMD yarn watch
