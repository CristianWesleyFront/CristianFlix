FROM node:12.13-alpine
WORKDIR /app
COPY /movie-web/package.json /app/package.json
RUN npm install --silent
COPY /movie-web/. /app

ENTRYPOINT [ "npm", "start"]