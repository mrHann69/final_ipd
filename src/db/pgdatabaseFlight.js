const { Sequelize } = require('sequelize');
const config = require('../config/config.js');
const setupModels = require('./setupModelsFlight.js');

const { POSTGRES_URI_DOCKER_FLIGHT, POSTGRES_URI_FLIGHT } = config;

const options = {
  host: "dbflightbooking",
  dialect: "postgres",
} 
const sequelize = new Sequelize(POSTGRES_URI_DOCKER_FLIGHT, options);
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