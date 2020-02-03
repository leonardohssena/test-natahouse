FROM node:10.9.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./package.json .
RUN npm install
COPY . .
CMD [ "npm", "start" ]