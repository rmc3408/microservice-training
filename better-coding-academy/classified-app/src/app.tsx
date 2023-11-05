import { GlobalStyle } from "root/styles/global";
import Root from 'root/pages/Root';
import { ApolloProvider } from "@apollo/client";
import client from "root/api/graphClient";


export default function App() {
  return <>
  <ApolloProvider client={client}>
    <GlobalStyle /><Root />
    </ApolloProvider>
  </>;
}