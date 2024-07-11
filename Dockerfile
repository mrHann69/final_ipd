FROM node:alpine
WORKDIR /booking-app/
COPY public/ /booking-app/public
COPY src/ /booking-app/src
COPY package*.json /booking-app/
COPY .env /booking-app/
RUN npm cache clean --force
RUN npm install
RUN npm install -g serve
EXPOSE 3000
CMD ["npm","run", "build", "&&", "serve", "-s", "build"]
# CMD ["npm", "start"]

# FROM node:latest
# RUN mkdir /code
# WORKDIR /code
# COPY package*.json /code/
# ARG . /code/
# RUN npm install
# RUN npm update -D
