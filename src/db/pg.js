const { Sequelize } = require("sequelize");
const config = require("../config/config.js");
const setupModels = require("./setupModels.js");

const { POSTGRES_URI } = config;

// const options = {
//   host: "localhost",
//   dialect: "postgres",
// }

const options = {
  username: config.POSTGRES_USERNAME,
  password: config.POSTGRES_PASSWORD,
  database: config.POSTGRES_DATABASE,
  host: config.POSTGRES_HOST,
  port: config.POSTGRES_PORT,
  dialect: "postgres",
};
const sequelize = new Sequelize(POSTGRES_URI, options);

setupModels(sequelize);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully. ✅✅");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testConnection();

// export default sequelize;
module.exports = sequelize;
// module.exports =testConnection
