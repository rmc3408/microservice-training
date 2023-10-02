import "@babel/polyfill"

import startDatabaseORM from '../config/sequelize'
import startServer from "./server"

async function start() {
  await startDatabaseORM()
  await startServer()
}

start()