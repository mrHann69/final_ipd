// import dotenv from'dotenv';
const dotenv = require('dotenv');
dotenv.config();

const config = {
    PORT: process.env.PORT,
    POSTGRES_HOST: process.env.POSTGRES_HOST,

    POSTGRES_USERNAME: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,

    POSTGRES_URI_HOTEL: process.env.POSTGRES_URI_HOTEL,
    POSTGRES_URI_DOCKER_HOTEL: process.env.POSTGRES_URI_DOCKER_HOTEL,
    POSTGRES_DATABASE_HOTEL: process.env.POSTGRES_DATABASE_HOTEL,
    POSTGRES_PORT_HOTEL: process.env.POSTGRES_PORT_HOTEL,

    POSTGRES_URI_FLIGHT: process.env.POSTGRES_URI_FLIGHT,
    POSTGRES_URI_DOCKER_FLIGHT: process.env.POSTGRES_URI_DOCKER_FLIGHT,
    POSTGRES_DATABASE_FLIGHT: process.env.POSTGRES_DATABASE_FLIGHT,
    POSTGRES_PORT_FLIGHT: process.env.POSTGRES_PORT_FLIGHT,
}

// export default config;
module.exports = config;