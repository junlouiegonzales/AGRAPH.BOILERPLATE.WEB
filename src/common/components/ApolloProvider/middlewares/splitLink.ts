import wsLink from './wsLink';
import httpLink from './httpLink';
import { getMainDefinition } from '@apollo/client/utilities';
import { split } from '@apollo/client';

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

export default splitLink;
