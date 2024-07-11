const { Sequelize } = require("sequelize");
const config = require("../config/config.js");
const setupModels = require("./setupModels.js");

const { POSTGRES_URI } = config;

const options = {
  username: config.POSTGRES_USERNAME,
  password: config.POSTGRES_PASSWORD,
  database: config.POSTGRES_DATABASE,
  host: config.POSTGRES_HOST || "192.168.1.3",
  port: config.POSTGRES_PORT,
  dialect: "postgres",
};
//const sequelize = new Sequelize(POSTGRES_URI, options);
const sequelize = new Sequelize(
  "postgres://postgres:postgres@192.168.1.3:5432/db",
  options
);

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
