
const { MYSQL_DATABASE, MYSQL_ROOT_USERNAME, MYSQL_ROOT_PASSWORD , MYSQL_HOST_URL } = process.env

module.exports = {
  development: {
    username: MYSQL_ROOT_USERNAME,
    password: MYSQL_ROOT_PASSWORD,
    database: MYSQL_DATABASE,
    host: MYSQL_HOST_URL,
    dialect: "mysql"
  }
}
