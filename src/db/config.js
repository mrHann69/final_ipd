const config = require("../config/config.js");

const URI = config.POSTGRES_URI;
console.log("🔥🔥🔥🔥🔥", {
  username: config.POSTGRES_USERNAME,
  password: config.POSTGRES_PASSWORD,
  database: config.POSTGRES_DATABASE,
  host: "192.168.1.3",
  port: config.POSTGRES_PORT,
});
module.exports = {
  development: {
    username: config.POSTGRES_USERNAME,
    password: config.POSTGRES_PASSWORD,
    database: config.POSTGRES_DATABASE,
    host: config.POSTGRES_HOST,
    port: config.POSTGRES_PORT,
    dialect: "postgres",
  },
};
