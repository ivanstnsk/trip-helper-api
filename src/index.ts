import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import { config } from 'dotenv';

import { schema } from './schema';
import { FileDataSource } from './datasources/FileDataSource';

config();

const bootstrap = async () => {
  const app = express();
  const server = new ApolloServer({
    schema,
    dataSources: () => ({
      dataAPI: new FileDataSource(),
    }),
    validationRules: [depthLimit(7)],
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });

  app.use('*', cors());
  app.use(compression());

  await server.start();

  server.applyMiddleware({ app, path: '/graphql' });
  const httpServer = createServer(app);

  httpServer.listen(
    { port: process.env.PORT },
    (): void => console.log(`\n🚀 GraphQL is now running on http://localhost:${process.env.PORT}/graphql`)
  );
};

bootstrap();
