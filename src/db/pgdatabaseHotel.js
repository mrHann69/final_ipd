const { Sequelize } = require('sequelize');
const config = require('../config/config.js');
const setupModels = require('./setupModelsHotel.js');

const { POSTGRES_URI_DOCKER_HOTEL, POSTGRES_URI_HOTEL } = config;

const options = {
  host: "dbhotelbooking",
  dialect: "postgres",
} 
const sequelize = new Sequelize(POSTGRES_URI_DOCKER_HOTEL, options);
// const sequelize = new Sequelize(POSTGRES_URI, options);

setupModels(sequelize);


// const testConnection = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }


// export default sequelize;
module.exports = sequelize
// module.exports =testConnection