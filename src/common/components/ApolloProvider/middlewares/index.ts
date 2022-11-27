import errorLink from './errorLink';
import splitLink from './splitLink';
import authLink from './authLink';

import { from } from '@apollo/client';

export default from([errorLink, authLink, splitLink]);
