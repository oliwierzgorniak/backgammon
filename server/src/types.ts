import { Request, Response } from "express";
import { MikroORM } from "@mikro-orm/core";

export type MyContext = {
  em: MikroORM["em"];
  req: Request;
  res: Response;
};
