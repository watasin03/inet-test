FROM stefanscherer/node-windows:7.6.0-nano
WORKDIR /usr/app
COPY package.json index.js .
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]