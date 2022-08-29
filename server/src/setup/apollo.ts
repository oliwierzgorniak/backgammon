import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "../resolvers/user";

// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/LICENSE
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/express/index.d.ts
// Copyright (c) Microsoft Corporation. MIT license: https://opensource.org/licenses/mit-license.php
import { Application } from "express-serve-static-core";

export const setupApollo = async (app: Application) => {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
};
