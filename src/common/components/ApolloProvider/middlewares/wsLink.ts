import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const wsLink = new GraphQLWsLink(
  createClient({
    url: process.env.REACT_APP_WEBSOCKET_SERVER_URL as string,
  })
);

export default wsLink;
