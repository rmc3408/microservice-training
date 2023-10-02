import "@babel/polyfill"
import "dotenv/config";

import startGraphQL from "#root/server"

console.log('API GATEWAY')
startGraphQL()
