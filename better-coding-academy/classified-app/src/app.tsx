import { GlobalStyle } from "root/styles/global";
import Root from 'root/pages/Root';
import { ApolloProvider } from "@apollo/client";
import client from "root/api/graphClient";
import { Provider } from 'react-redux';
import { store } from 'root/store'


export default function App() {
  return <>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <GlobalStyle /><Root />
      </ApolloProvider>
    </Provider>
  </>;
}