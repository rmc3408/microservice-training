import "@babel/polyfill"

import startDatabaseORM from '../config/sequelize'
import startServer from "../config/server"

async function start() {
  await startDatabaseORM()
  await startServer()
}

start()