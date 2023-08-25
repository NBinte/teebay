import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo.config';
import { useContext, useState } from 'react';
import { createContext } from 'react';
import MainApp from './mainApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <ApolloProvider client={client}>
    <MainApp />
  </ApolloProvider>,
);
