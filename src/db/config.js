// import config from "../config/config.js";
const config = require('../config/config.js');

// const URI = config.POSTGRES_URI_DOCKER;
const URI_HOTEL = config.POSTGRES_URI_HOTEL;
const URI_FLIGHT = config.POSTGRES_URI_FLIGHT;

// export default {
module.exports = {
  devhotel: {
    url: URI_HOTEL,
    dialect: 'postgres'
  },
  devflight: {
    url: URI_FLIGHT,
    dialect: 'postgres'
  }
};