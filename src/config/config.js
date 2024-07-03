// import dotenv from'dotenv';
const dotenv = require('dotenv');
dotenv.config();

const config = {
    PORT: process.env.PORT,
    POSTGRES_HOST: process.env.POSTGRES_HOST,

    POSTGRES_USERNAME: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,

    POSTGRES_URI: process.env.POSTGRES_URI,
    POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
    POSTGRES_PORT: process.env.POSTGRES_PORT,
}

// export default config;
module.exports = config;