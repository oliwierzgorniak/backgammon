import session from "express-session";
import { Application } from "express";
import connectRedis from "connect-redis";
import { COOKIE_NAME, __prod__ } from "../constants";
import redis from "../clients/redis";

export default function setupSession(app: Application) {
  const RedisStore = connectRedis(session);

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: "lax", // csrf
        secure: __prod__, // cookie only works in https
        domain: __prod__ ? "TODO" : undefined,
      },
      saveUninitialized: false,
      // @ts-ignore
      secret: process.env.SESSION_SECRET,
      resave: false,
    })
  );
}
