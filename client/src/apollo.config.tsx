import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, path }) => {
      alert(`Graphql error ${message}`);
    });
  }

  if (networkError) {
    alert(networkError);
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: ' http://localhost:3000/graphql',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  }),
]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
