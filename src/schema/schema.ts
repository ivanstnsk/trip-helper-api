import 'graphql-import-node';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { GraphQLSchema } from 'graphql';

import { resolvers } from '../resolvers';

import * as typeDefs from './schema.graphql';

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
