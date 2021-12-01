FROM node:16

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

CMD node app.js

EXPOSE 4000

