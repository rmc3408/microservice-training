import "@babel/polyfill"

import startDatabaseORM from '../config/sequelize'
import startServer from "../config/server"

startDatabaseORM()
startServer()
