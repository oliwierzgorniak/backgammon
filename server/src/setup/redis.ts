import { createClient } from "redis";
import session from "express-session";
import connectRedis from "connect-redis";

// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/LICENSE
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/express/index.d.ts
// Copyright (c) Microsoft Corporation. MIT license: https://opensource.org/licenses/mit-license.php
import { Application } from "express-serve-static-core";

export const setupRedis = (app: Application) => {
  const RedisStore = connectRedis(session);
  const redisClient = createClient();

  app.use(
    session({
      name: "qid",
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
        disableTTL: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: "lax", // csrf
        secure: false, // true - https only
      },
      saveUninitialized: false,
      secret: "secret", // TODO: change the secret
      resave: false,
    })
  );
};
