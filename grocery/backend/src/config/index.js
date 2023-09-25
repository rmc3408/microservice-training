const dotEnv = require('dotenv')
const path = require('path')

const baseFile = path.join(__dirname, '../../.env')

if (process.env.NODE_ENV !== 'prod') {
  dotEnv.config({ path: baseFile })
} else {
  dotEnv.config()
}

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
}
