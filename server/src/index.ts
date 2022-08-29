import "reflect-metadata";
import express from "express";
import "dotenv/config";
import { setupTypeOrm } from "./setup/typeorm";
import { setupRedis } from "./setup/redis";
import { setupApollo } from "./setup/apollo";

const main = async () => {
  const app = express();

  setupTypeOrm();
  setupRedis(app);
  setupApollo(app);

  app.listen(process.env.PORT, () => {
    console.log("server is listening on port", process.env.PORT);
  });
};
main();
