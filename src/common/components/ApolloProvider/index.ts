import React, { FunctionComponent, ReactNode } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import middlewares from './middlewares';
import package_json from '../../../../package.json';

const client = new ApolloClient({
  link: middlewares,
  cache: new InMemoryCache(),
  name: 'Apollo GraphQL Boilerplate for Web',
  version: package_json.version,
});

export type ApolloProviderProps = {
  children: ReactNode;
};

const App: FunctionComponent<ApolloProviderProps> = (
  props: ApolloProviderProps
) => {
  const { children } = props;
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default App;
