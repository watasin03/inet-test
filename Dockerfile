FROM node:16-alpine3.11
WORKDIR /usr/app
COPY package.json index.js ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]