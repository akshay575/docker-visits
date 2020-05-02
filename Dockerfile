# base image
FROM node:alpine

# set working directory
WORKDIR /app

# install dependencies
COPY package.json .
RUN npm install
COPY . .

# default startup command
CMD ["npm", "start"]