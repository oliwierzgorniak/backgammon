import "reflect-metadata";
import express from "express";
import "dotenv/config";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { UserResolver } from "./resolvers/user";
import { PrismaClient } from "@prisma/client";

const main = async () => {
  const app = express();

  const prisma = new PrismaClient();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, UserResolver],
      validate: false,
    }),
    context: () => prisma,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  const users = await prisma.user.findMany();
  console.log(users);

  app.get("/", (_, res) => {
    res.send("hello");
  });

  app.listen(process.env.PORT, () => {
    console.log("server is listening on port", process.env.PORT);
  });
};
main();
