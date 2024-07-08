FROM node:latest
COPY ["package.json", "package-lock.json", "/app/"]
WORKDIR /app/
RUN npm cache clean --force
RUN npm install
COPY [".","/app/"]
EXPOSE 4000
CMD ["node", "index.js"]
