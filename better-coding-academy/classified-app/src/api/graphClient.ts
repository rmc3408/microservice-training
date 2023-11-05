import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.SERVICES_URI,
  cache: new InMemoryCache(),
  credentials: "include"
});

export default client
