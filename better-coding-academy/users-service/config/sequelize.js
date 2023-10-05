const { Sequelize } = require('sequelize');

const { MYSQL_DATABASE, MYSQL_ROOT_USERNAME, MYSQL_ROOT_PASSWORD , MYSQL_HOST_URL} = process.env

const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_ROOT_USERNAME, MYSQL_ROOT_PASSWORD, {
  dialect: "mysql",
  host: MYSQL_HOST_URL,
  logging: false
})

async function startDatabaseORM() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    sequelize.close()
  }
}

module.exports = startDatabaseORM
module.exports.sequelize = sequelize