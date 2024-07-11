// import dotenv from'dotenv';
const dotenv = require("dotenv");
dotenv.config();

const config = {
  PORT: process.env.PORT,
  POSTGRES_HOST: "192.168.1.3",
  POSTGRES_HOST_DOCKER: "192.168.1.3",

  POSTGRES_USERNAME: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,

  POSTGRES_URI: "posgres://postgres:postgres@192.168.1.3:5432/db",
  POSTGRES_URI_DOCKER: "posgres://postgres:postgres@192.168.1.3:5432/db",

  POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
  POSTGRES_PORT: process.env.POSTGRES_PORT,
};

// export default config;
module.exports = config;
