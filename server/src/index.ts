import "reflect-metadata";
import express from "express";
import "dotenv/config";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";

const main = async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.get("/", (_, res) => {
    res.send("hello");
  });

  app.listen(process.env.PORT, () => {
    console.log("server is listening on port", process.env.PORT);
  });
};
main();
