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
import { Resolvers } from './graphql/resolvers';
import UserServices from './services/users';


export default async function startGraphQL() {
  const app = express()
  const httpServer = http.createServer(app)

  const apolloServer = new ApolloServer({
    formatError: formatGraphQLErrors,
    resolvers: Resolvers,
    typeDefs,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })

  await apolloServer.start()

  const corsOptions = { origin: true, credentials: true }

  // middlewares together
  app.use('/graphql',
    cors(corsOptions),
    cookieParser(),
    bodyParser.json(),
    expressMiddleware(apolloServer, {
      context: async ({ req, res }) => {
        try {
          const session = await UserServices.getSession(req.cookies.session)
          res.locals.activeUser = session
        } catch(e) {
          //console.log(e)
        } finally {
          return { res, req }
        }
      }
    })
  )

  await new Promise((resolve) => httpServer.listen({ port: 3000 }, resolve))
  console.log(`🚀 Server ready at http://localhost:3000`)
}
