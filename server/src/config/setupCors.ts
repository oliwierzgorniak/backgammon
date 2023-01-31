import cors from "cors";
import { Application } from "express";
import { __prod__ } from "../constants";

export default function setupCors(app: Application) {
  app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );
}
