FROM node:20.5.1-bullseye AS install

RUN mkdir -p /src
WORKDIR /src
ADD src/. /src
ADD *.json /

RUN npm install

CMD npm start
