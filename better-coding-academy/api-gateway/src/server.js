import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import formatGraphQLErrors from './graphql/formatGraphQLErrors'
import cors from 'cors';
import http from 'http';
import cookieParser from "cookie-parser";
import express from 'express';
import bodyParser from 'body-parser';

import typeDefs from "./graphql/typeDefs";
import { listingsResolver } from './graphql/resolvers';


export default async function startGraphQL() {
  const app = express()
  const httpServer = http.createServer(app)
  
  const apolloServer = new ApolloServer({
    formatError: formatGraphQLErrors,
    resolvers: listingsResolver,
    typeDefs,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })

  await apolloServer.start()

  app.use(cookieParser())
  const corsOptions = { origin: true, credentials: true }
  app.use('/graphql', bodyParser.json(), cors(corsOptions), expressMiddleware(apolloServer, {
    context: ctx => ctx,
  }))

  await new Promise((resolve) => httpServer.listen({ port: 3000 }, resolve))
  console.log(`🚀 Server ready at http://localhost:3000/graphql`)
}
