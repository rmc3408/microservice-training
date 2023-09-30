FROM mhart/alpine-node

WORKDIR /opt/app
COPY package.json .
RUN yarn
COPY . .

CMD yarn watch