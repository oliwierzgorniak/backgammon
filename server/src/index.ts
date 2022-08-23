import { MikroORM } from "@mikro-orm/core";
import mikroConfig from "./mikro-orm.config";
import "reflect-metadata";
import express from "express";
import "dotenv/config";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user";
// import { createClient } from "redis";
// import session from "express-session";
// import connectRedis from "connect-redis";

const main = async () => {
  const app = express();

  // const RedisStore = connectRedis(session);
  // const redisClient = createClient();

  // app.use(
  //   session({
  //     name: "qid",
  //     store: new RedisStore({
  //       client: redisClient,
  //       disableTouch: true,
  //       disableTTL: true,
  //     }),
  //     cookie: {
  //       maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
  //       httpOnly: true,
  //       sameSite: "lax", // csrf
  //       secure: false, // true - https only
  //     },
  //     saveUninitialized: false,
  //     secret: "secret", // TODO: change the secret
  //     resave: false,
  //   })
  // );

  // @ts-ignore
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ em: orm.em, req, res }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(process.env.PORT, () => {
    console.log("server is listening on port", process.env.PORT);
  });
};
main();
